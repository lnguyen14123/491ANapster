import express from "express";
import path, { parse } from "path";
import { pool } from "../db.js";
import { randomUUID } from "crypto"; // built-in in Node.js v14+
import { start } from "repl";

const router = express.Router();
const __dirname = path.resolve();

// Send the username as JSON
router.get("/user", (req, res) => {

  if (!req.session.user) {

    return res.status(401).json({ error: "Not logged in" });
  }

  res.json({ username: req.session.user.name });
});


router.get("/naplen", async (req, res) => {

  if (!req.session.user) {

    return res.status(401).json({ error: "Not logged in" });
  }

  const queryResult = await pool.query(
    `SELECT preferrednaplen 
     FROM "nappingprofile" 
     WHERE userID = $1`,
    [req.session.user.id]
  );
  
  const napLen = queryResult.rows[0]?.preferrednaplen;
  
  res.json({ preferrednaplen: napLen });
});

router.get("/naphistory", async (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ error: "Not logged in" });
  }

  try {
    const queryResult = await pool.query(
      `SELECT napstart, napend 
       FROM "nap" 
       WHERE userid = $1
       ORDER BY napstart DESC`,
      [req.session.user.id]
    );

    // Send all rows as JSON
    res.json({ naps: queryResult.rows });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// KATE DINH: Rewards endpoint – compute nap points and streak from "nap" table
router.get("/rewards", async (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ error: "Not logged in" });
  }

  const userID = req.session.user.id;

  try {
    // 1) Total nap minutes and total naps
    const napStats = await pool.query(
      `
      SELECT
        COALESCE(SUM(EXTRACT(EPOCH FROM (napend - napstart)) / 60.0), 0) AS total_minutes,
        COUNT(*) AS total_naps
      FROM "nap"
      WHERE userid = $1
        AND napend IS NOT NULL
      `,
      [userID]
    );

    const totalMinutes = Number(napStats.rows[0].total_minutes || 0);
    const totalNaps = Number(napStats.rows[0].total_naps || 0);

    // Example points formula: 1 point per minute + 10 bonus per completed nap
    const napPoints = Math.round(totalMinutes + totalNaps * 10);

    // 2) Build current + longest streak from distinct nap days
    const streakResult = await pool.query(
      `
      SELECT DISTINCT DATE(napend) AS nap_date
      FROM "nap"
      WHERE userid = $1
        AND napend IS NOT NULL
      ORDER BY nap_date ASC
      `,
      [userID]
    );

    const days = streakResult.rows.map((r) => {
      const d = new Date(r.nap_date);
      d.setHours(0, 0, 0, 0);
      return d;
    });

    const msPerDay = 1000 * 60 * 60 * 24;
    let currentStreak = 0;
    let longestStreak = 0;

    if (days.length > 0) {
      // Longest streak (scan from oldest to newest)
      let streak = 1;
      for (let i = 1; i < days.length; i++) {
        const diffDays = Math.round(
          (days[i].getTime() - days[i - 1].getTime()) / msPerDay
        );
        if (diffDays === 1) {
          streak++;
        } else if (diffDays > 1) {
          if (streak > longestStreak) longestStreak = streak;
          streak = 1;
        }
      }
      if (streak > longestStreak) longestStreak = streak;

      // Current streak (scan backwards from newest)
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const latest = days[days.length - 1];
      const diffFromToday = Math.round(
        (today.getTime() - latest.getTime()) / msPerDay
      );

      if (diffFromToday <= 1) {
        // streak is active (nap today or yesterday)
        currentStreak = 1;
        for (let i = days.length - 2; i >= 0; i--) {
          const diff = Math.round(
            (days[i + 1].getTime() - days[i].getTime()) / msPerDay
          );
          if (diff === 1) {
            currentStreak++;
          } else {
            break;
          }
        }
      } else {
        currentStreak = 0;
      }
    }

    res.json({
      napPoints,
      totalMinutes,
      totalNaps,
      currentStreak,
      longestStreak,
    });
  } catch (err) {
    console.error("Error in GET /api/rewards:", err);
    res.status(500).json({ error: "Failed to fetch rewards" });
  }
});

// handle the change username action, updates database to new username
router.post("/changeusername", async (req, res) => {
  const username = req.body.username.trim();

  const userID = req.session.user?.id;
  if (!userID) {
    return res.status(401).send("Not logged in");
  }

  try {
    // do some checks before inserting
    if (!username || username.length < 3) {
      return res.status(400).send("Username must be at least 3 characters");
    }

    if (username == req.session.user.name) {
      return res.status(400).send("Username must be different from current username");
    }

    // Update the username for this user
    await pool.query(
      `UPDATE "User" SET name = $1 WHERE userID = $2`,
      [username, userID]
    );

    req.session.user.name = username;

    res.send("Username updated successfully");

  } catch (err) {
    // can we just do an alert here
    console.error(err);
    res.send("Something went wrong during sign-in.");
  }
});

router.post("/changeNapLen", async (req, res) => {
  const napLen = parseInt(req.body.napValue.trim()) * 60; // convert to int then x 60 for seconds

  const userID = req.session.user?.id;
  if (!userID) {
    return res.status(401).send("Not logged in");
  }

  try {

    // Update the username for this user
    await pool.query(
      `INSERT INTO "nappingprofile" (userid, currentstreak, longeststreak, nappingpoints, averagenapquality, preferrednaplen)
      VALUES ($1, 0, 0, 0, 0, $2)
      ON CONFLICT (userID) 
      DO UPDATE SET preferrednaplen = EXCLUDED.preferrednaplen`,
      [userID, napLen]
    );

    res.send("Nap length updated successfully");

  } catch (err) {
    // can we just do an alert here
    console.error(err);
    res.send("Something went wrong!");
  }
});

router.post("/startNap", async (req, res) => {

  const userID = req.session.user?.id;
  if (!userID) {
    return res.status(401).send("Not logged in");
  }

  try {
    const napID = randomUUID();
    await pool.query(
      `INSERT INTO "nap" (napid, userid, napstart)
      VALUES ($1, $2, NOW() AT TIME ZONE 'UTC')`,
      [napID, userID]
    );

    res.json({ napID });

  } catch (err) {
    // can we just do an alert here
    console.error(err);
    res.send("Something went wrong!");
  }
});

router.post("/endNap", async (req, res) => {

  const userID = req.session.user?.id;

  const napID = req.body.napID;

  if (!userID) {
    return res.status(401).send("Not logged in");
  }

  if (!napID) {
    return res.status(401).send("Nap hasn't started yet");
  }

  try {
    await pool.query(
      `UPDATE "nap" 
        SET napend = NOW() AT TIME ZONE 'UTC'
      WHERE napid = $1 AND userid = $2`,
      [napID, userID]
    );

    res.json({ success: true, napID });

  } catch (err) {
    // can we just do an alert here
    console.error(err);
    res.send("Something went wrong!");
  }
});

router.post("/save-naps", async (req, res) => {
  const userID = req.session.user?.id;
  if (!userID) {
    return res.status(401).send("Not logged in");
  }


  const naps = req.body.naps; // Expecting [{ day: "Monday", time: "8:00 AM" }, ...]
  if (!Array.isArray(naps) || naps.length === 0) {
    return res.status(400).send("No nap times provided");
  }

  try {
    const dayMap = {
      Monday: 0,
      Tuesday: 1,
      Wednesday: 2,
      Thursday: 3,
      Friday: 4,
      Saturday: 5,
      Sunday: 6
    };

    const parseHour = (timeStr) => {
      const [time, modifier] = timeStr.split(" ");
      let [hour, minutes] = time.split(":").map(Number);
      if (modifier === "PM" && hour !== 12) hour += 12;
      if (modifier === "AM" && hour === 12) hour = 0;
      return hour; // integer hour (0–23)
    };
    
    await pool.query(`DELETE FROM "userAvailability" WHERE userid = $1`, [userID]);

    // Build the array of values
    const values = naps.map(({ day, time }) => [
      userID,
      dayMap[day],
      parseHour(time)
    ]);

    // Insert all at once
    const insertQuery = `
      INSERT INTO "userAvailability" (userid, day, time)
      VALUES ${values.map((_, i) => `($${i * 3 + 1}, $${i * 3 + 2}, $${i * 3 + 3})`).join(", ")}
    `;

    const flatValues = values.flat();

    await pool.query(insertQuery, flatValues);

    res.json({ message: "Saved successfully!" });
  } catch (err) {
    console.error("Error saving naps:", err);
    res.status(500).send("Something went wrong saving naps");
  }
});

router.post("/sleepStartEndHours", async (req, res) => {
  // Backend to add user's sleep start and end hours
  const userID = req.session.user?.id;
  if (!userID) {
    return res.status(401).send("Not logged in");
  }

  const sleep = req.body.sleep;
  if (!Array.isArray(sleep) || sleep.length === 0) {
    return res.status(400).send("No sleep start and end times provided");
  }

  try {
    const parseStart = (item) => {
      const parseItem = item[5];
      return parseInt(parseItem) - 1;
    };

    const parseEnd = (item) => {
      const parseItem = item[3];
      return parseInt(parseItem) - 1;
    };

    const queryValues = sleep.map(({napHours, startTimeChoice, endTimeChoice}) => [
      userID,
      napHours,
      parseStart(startTimeChoice),
      parseEnd(endTimeChoice)
    ]);

    await pool.query(
      `INSERT INTO "scheduleSleepNap" (userid, naphours, sleepstart, sleepend)
      VALUES ($1, $2, $3, $4)
      ON CONFLICT (userid)
      DO UPDATE SET naphours = EXCLUDED.naphours, sleepstart = EXCLUDED.sleepstart, sleepend = EXCLUDED.sleepend`,
      [userID, queryValues.flat()[1], queryValues.flat()[2], queryValues.flat()[3]]);
    res.json({message: "Saved successfully!"});
  } catch (err) {
    console.error("Error saving sleep start and end times:", err);
    res.status(500).send("Something went wrong saving sleep start and end times");
  }
}); 


router.get("/get-naps", async (req, res) => {
  const userID = req.session.user?.id;
  if (!userID) return res.status(401).send("Not logged in");

  try {
    const result = await pool.query(
      `SELECT day, time FROM "userAvailability" WHERE userid = $1`,
      [userID]
    );

    res.json(result.rows);
  } catch (err) {
    console.error("Error fetching naps:", err);
    res.status(500).send("Something went wrong loading naps");
  }
});

router.post("/streakPostUpdate", async (req, res) => {
  // Backend code for updating the user's current streak, longest streak, and the user's preferred nap length

  const userID = req.session.user?.id;
  if (!userID) {
    return res.status(401).send("Not logged in");
  }

  const action = req.body.action;
  if (!Array.isArray(action) || action.length === 0) {
    return res.status(400).send("No sleep start and end times provided");
  }

  try {
    if (action[0] == "POST") {
      await pool.query(
      `INSERT INTO "nappingprofile" (userid, currentstreak, longeststreak, nappingpoints, averagenapquality, preferrednaplen)
      VALUES ($1, 0, 0, 0, 0, 0)
      `, [userID]
    );
    }

    res.json({message: "Saved successfully!"});
  } catch (err) {
    console.error("Error saving streak:", err);
    res.status(500).send("Something went wrong saving streak");
  }
});


router.get("/getStreak", async (req, res) => {
  // Backend to get user's current streak
  const userID = req.session.user?.id;
  if (!userID) return res.status(401).send("Not logged in");

  try {
    const result = await pool.query(
      `SELECT currentstreak FROM nappingprofile WHERE userid = $1`,
      [userID]
    );

    res.json({streak: result.rows});
  } catch (err) {
    console.error("Error fetching naps:", err);
    res.status(500).send("Something went wrong loading naps");
  }
});

router.post("/saveAIFilters", async (req, res) => {
  // Backend code to add or update user's AI filters
  const userID = req.session.user?.id;
  if (!userID) {
    return res.status(401).send("Not logged in");
  }

  const filter = req.body.filter;
  if (!Array.isArray(filter) || filter.length === 0) {
    return res.status(400).send("No filters provided");
  }

  try {
    const parseOccupation = (item) => {
      let parsed = ""

      if (item.length > 4) {
        parsed = item[3] + item[4];
      } else {
        parsed = item[3];
      }

      return parseInt(parsed) - 1;
    };

    const queryValues = filter.map(({genderChoice, ageRangeChoice, occupationChoice, startWorkTimeChoice, endWorkTimeChoice}) => [
      userID,
      parseInt(genderChoice[6]) - 1,
      parseInt(ageRangeChoice[3]) - 1,
      parseOccupation(occupationChoice),
      parseInt(startWorkTimeChoice[9]) - 1,
      parseInt(endWorkTimeChoice[7]) - 1
    ]);

    console.log(filter);
    console.log(queryValues);

    await pool.query(
      `INSERT INTO "aiFilter" (userid, gender, agerange, occupation, startworkhour, endworkhour)
      VALUES ($1, $2, $3, $4, $5, $6)
      ON CONFLICT (userid)
      DO UPDATE SET gender = EXCLUDED.gender, agerange = EXCLUDED.agerange, occupation = EXCLUDED.occupation, startworkhour = EXCLUDED.startworkhour, endworkhour = EXCLUDED.endworkhour`,
      [userID, queryValues.flat()[1], queryValues.flat()[2], queryValues.flat()[3], queryValues.flat()[4], queryValues.flat()[5]]
    );

    res.json({message: "Saved successfully!"});
  } catch (err) {
    console.error("Error saving filters:", err);
    res.status(500).send("Something went wrong saving filters");
  }
}); 

router.post("/napSchedule", async (req, res) => {
  const client = await pool.connect();

  try {
    const userID = req.session.user?.id;
    if (!userID) {
      return res.status(401).send("Not logged in");
    }

    const { naps } = req.body;
    if (!Array.isArray(naps) || naps.length === 0) {
      return res.status(400).json({ error: "No naps provided" });
    }

    // Begin transaction
    await client.query("BEGIN");

    // 1️⃣ Delete existing naps for this user
    await client.query(`DELETE FROM "napSchedule" WHERE userid = $1`, [userID]);

    // 2️⃣ Insert the new naps
    const values = naps
      .map(
        (n, i) =>
          `($${i * 4 + 1}, $${i * 4 + 2}, $${i * 4 + 3}, $${i * 4 + 4})`
      )
      .join(",");

    const params = naps.flatMap((n) => [
      userID,
      n.startTime,
      n.endTime,
      n.day,
    ]);

    const insertQuery = `
      INSERT INTO "napSchedule" ("userid", "startTime", "endTime", "day")
      VALUES ${values}
      RETURNING *;
    `;

    const result = await client.query(insertQuery, params);

    // Commit transaction
    await client.query("COMMIT");

    res.json({ success: true, naps: result.rows });
  } catch (err) {
    console.error("Error saving naps:", err);
    await client.query("ROLLBACK");
    res.status(500).json({ error: "Failed to save naps" });
  } finally {
    client.release();
  }
});

router.get("/napSchedule", async (req, res) => {
  const userID = req.session.user?.id;
  if (!userID) {
    return res.status(401).send("Not logged in");
  }

  try {
    const result = await pool.query(
      `SELECT day, "startTime", "endTime" FROM "napSchedule" WHERE userid = $1`,
      [userID]
    );
    res.json({ success: true, naps: result.rows });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
});

router.get("/recommendations", async (req, res) => {
  const userID = req.session.user?.id;
  if (!userID) return res.status(401).send("Not logged in");

  try {
    const result = await pool.query(
      `SELECT day, time FROM "userAvailability" WHERE userid = $1`,
      [userID]
    );

    const availability = result.rows;

    // Group hours by day
    const grouped = {};
    for (const { day, time } of availability) {
      grouped[day] = grouped[day] || [];
      grouped[day].push(time);
    }

    const dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const recommendations = [];

    // Eating times to avoid
    const eatingBlocks = [
      [8, 9],    // breakfast
      [12, 13],  // lunch
      [18, 19]   // dinner
    ];

    // Helper: small random offset
    const randomOffset = () => (Math.random() * 10 - 5) / 60; // ±5–10 min

    // Helper: format float hours to AM/PM
    const formatTime = (h) => {
      const totalMinutes = Math.round(h * 60);
      const hour = Math.floor(totalMinutes / 60);
      const min = totalMinutes % 60;
      const period = hour >= 12 ? "PM" : "AM";
      const hour12 = hour % 12 || 12;
      return `${hour12}:${min.toString().padStart(2, "0")} ${period}`;
    };

    // Loop through each day
    for (const [day, hours] of Object.entries(grouped)) {
      if (!hours.length) continue;

      // Sort and find continuous blocks
      const sorted = [...hours].sort((a, b) => a - b);
      const blocks = [];
      let start = sorted[0], prev = sorted[0];
      for (let i = 1; i < sorted.length; i++) {
        if (sorted[i] === prev + 1) prev = sorted[i];
        else { blocks.push([start, prev]); start = sorted[i]; prev = sorted[i]; }
      }
      blocks.push([start, prev]);

      // Score each block
      const scoredBlocks = blocks.map(([s, e]) => {
        let score = e - s + 1; // longer = better

        // Penalize overlap with meals
        for (const [mealStart, mealEnd] of eatingBlocks) {
          if (!(e < mealStart || s > mealEnd)) score -= 2;
        }

        // Prefer afternoon naps
        const mid = (s + e + 1) / 2;
        if (mid >= 13 && mid <= 17) score += 2; // afternoon bonus

        // Avoid early morning & late night
        if (mid <= 10) score -= 2;
        if (mid >= 18) score -= 2;

        return { start: s, end: e, score };
      });

      // Pick best block
      scoredBlocks.sort((a, b) => b.score - a.score);
      const best = scoredBlocks[0];

      // Schedule one nap in the middle with small random offset
      const mid = (best.start + best.end + 1) / 2;
      const napStart = mid - 0.25 + randomOffset();
      const napEnd = mid + 0.25 + randomOffset();

      recommendations.push({
        day: dayNames[day],
        time: `${formatTime(napStart)} – ${formatTime(napEnd)}`
      });
    }

    res.json(recommendations);

  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
});


router.post("/saveSurvey", async (req, res) => {
  try {
    const { napID, quality, wakeup, notes } = req.body;

    if (!napID) {
      return res.status(400).json({ error: "napID is required" });
    }

    console.log(req.body);

    const result = await pool.query(
      `UPDATE nap
       SET quality = $1,
           wakeup = $2,
           notes  = $3
       WHERE napid = $4
       RETURNING napid`,
      [quality || null, wakeup || null, notes || null, napID]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Nap not found" });
    }

    // Use napID as submissionKey
    res.json({ submissionKey: napID });

  } catch (err) {
    console.error("Error saving survey:", err);
    res.status(500).json({ error: "Failed to save survey" });
  }
});


router.get("/community_insights", async (req, res) => {
  try {
    // 1. Overview Stats ----------------------------------------------
    const overviewQuery = `
      SELECT 
        COUNT(*) AS total_naps,
        AVG(EXTRACT(EPOCH FROM (napend - napstart)) / 60) AS avg_duration,
        COUNT(DISTINCT userid) AS active_users,
        TO_CHAR(
          date_trunc('hour', napstart), 
          'HH12:MI AM'
        ) AS peak_time
      FROM nap
      GROUP BY peak_time
      ORDER BY COUNT(*) DESC
      LIMIT 1;
    `;

    const overviewResult = await pool.query(overviewQuery);

    const overview = overviewResult.rows.length
      ? {
          totalNaps: Number(overviewResult.rows[0].total_naps),
          avgDuration: Math.round(Number(overviewResult.rows[0].avg_duration)),
          activeUsers: Number(overviewResult.rows[0].active_users),
          peakTime: overviewResult.rows[0].peak_time,
        }
      : {
          totalNaps: 0,
          avgDuration: 0,
          activeUsers: 0,
          peakTime: "N/A",
        };

    // 2. Duration Distribution Buckets -------------------------------
    const durationQuery = `
      SELECT
        CASE
          WHEN dur <= 10 THEN '0–10 min'
          WHEN dur <= 20 THEN '10–20 min'
          WHEN dur <= 30 THEN '20–30 min'
          WHEN dur <= 45 THEN '30–45 min'
          WHEN dur <= 60 THEN '45–60 min'
          ELSE '60+ min'
        END AS range,
        COUNT(*) AS count
      FROM (
        SELECT EXTRACT(EPOCH FROM (napend - napstart)) / 60 AS dur
        FROM nap
        WHERE napend IS NOT NULL
      ) t
      GROUP BY range
      ORDER BY min(dur);
    `;

    const durationResult = await pool.query(durationQuery);
    const durationDistribution = durationResult.rows;

    // 3. Quality Ratings ---------------------------------------------
    const qualityQuery = `
      SELECT 
        CASE quality
          WHEN 1 THEN 'Poor'
          WHEN 2 THEN 'Fair'
          WHEN 3 THEN 'Good'
          WHEN 4 THEN 'Very Good'
          WHEN 5 THEN 'Excellent'
          ELSE 'Unrated'
        END AS rating,
        COUNT(*) AS count
      FROM nap
      GROUP BY rating
      ORDER BY rating;
    `;

    const qualityResult = await pool.query(qualityQuery);
    const qualityRatings = qualityResult.rows;

    // 4. Time Distribution (Hourly) ----------------------------------
    const hourlyQuery = `
      SELECT 
        EXTRACT(HOUR FROM napstart)::int AS hour,
        COUNT(*) AS count
      FROM nap
      GROUP BY hour
      ORDER BY hour;
    `;

    const hourlyResult = await pool.query(hourlyQuery);

    const timeDistribution = {
      labels: hourlyResult.rows.map(r => `${r.hour}:00`),
      data: hourlyResult.rows.map(r => Number(r.count)),
    };

    // 5. Weekday Pattern ----------------------------------------------
    const weekdayQuery = `
      SELECT
        TO_CHAR(napstart, 'Day') AS weekday,
        AVG(EXTRACT(EPOCH FROM (napend - napstart)) / 60) AS avg_duration,
        COUNT(*) AS count
      FROM nap
      GROUP BY weekday
      ORDER BY MIN(EXTRACT(ISODOW FROM napstart));
    `;

    const weekdayResult = await pool.query(weekdayQuery);

    const weekdayPattern = {
      labels: weekdayResult.rows.map(r => r.weekday.trim()),
      avgDuration: weekdayResult.rows.map(r => Math.round(Number(r.avg_duration))),
      napCount: weekdayResult.rows.map(r => Number(r.count)),
    };

    // 6. Top Locations (Placeholder) ----------------------------------
    // You don’t have a "location" column yet, so we return dummy values
    const topLocations = [
      { name: "Couch", count: 0 },
      { name: "Bed", count: 0 },
      { name: "Office Desk", count: 0 },
    ];

    // Final JSON ------------------------------------------------------
    res.json({
      overview,
      durationDistribution,
      qualityRatings,
      topLocations,          // until you add a real column
      timeDistribution,
      weekdayPattern,
    });

  } catch (err) {
    console.error("Error generating community insights:", err);
    res.status(500).json({ error: "Failed to generate insights" });
  }
});

//GET: user profile (Jihye Kim)
router.get('/userprofile', async (req, res) => {
  if (!req.session?.user) {
    return res.status(401).json({ error: 'Not logged in' });
  }

  try {
    const userId = req.session.user.id; // "User".userid (VARCHAR(36))

    const { rows } = await pool.query(
      `
      SELECT
        u.userid,
        u.name,
        u.email,
        u.created_at AS user_created_at,
        u.cityname  AS user_city,
        u.country AS user_country,

        up.display_name AS "displayName",
        up.bio,
        up.website,
        up.ringtone_name,
        up.avatar_url AS "avatarUrl",
        up.updated_at,

        -- Total naps
        (
          SELECT COUNT(*)
          FROM nap n
          WHERE n.userid = u.userid AND n.napend IS NOT NULL
        ) AS total_naps,

        -- Average nap length
        (
          SELECT ROUND(AVG(EXTRACT(EPOCH FROM (n.napend - n.napstart)) / 60.0))::int
          FROM nap n
          WHERE n.userid = u.userid AND n.napend IS NOT NULL
        ) AS avg_nap_len,

        -- 5 recent activities
        (
          SELECT COALESCE(
            json_agg(
              json_build_object(
                'text',
                CONCAT(
                  'Took a ',
                  COALESCE(ROUND(EXTRACT(EPOCH FROM (n2.napend - n2.napstart)) / 60.0)::int, 0),
                  ' min nap'
                ),
                'time',
                to_char(n2.napstart, 'YYYY-MM-DD HH24:MI')
              )
            ),
            '[]'::json
          )
          FROM (
            SELECT n2.napstart, n2.napend
            FROM nap n2
            WHERE n2.userid = u.userid
            ORDER BY n2.napstart DESC
            LIMIT 5
          ) AS n2
        ) AS activity

      FROM "User" AS u
      LEFT JOIN userprofile AS up
        ON up.userid = u.userid
      WHERE u.userid = $1
      `,
      [userId]
    );

    const r = rows[0] || {};

    const city = r.user_city || null;
    const country = r.user_country || null;
    const location =
      city && country ? `${city}, ${country}` : city ? city : (country || null);

    res.json({
      displayName: r.displayName ?? null,
      avatarUrl: r.avatarUrl ?? null,
      bio: r.bio ?? null,
      location,
      website: r.website ?? null,
      created_at: r.user_created_at ?? null,
      preferences: {
        ringtoneName: r.ringtone_name ?? null,
        defaultNap: null
      },
      stats: {
        totalNaps: r.total_naps ?? 0,
        avgNapLen: r.avg_nap_len ?? null,
        streak: null
      },
      activity: r.activity ?? []
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

const norm = (v) => (typeof v === 'string' ? v.trim() : null);
function parseLocation(input) {
  const s = norm(input);
  if (!s) return { city: null, country: null };
  const [cityRaw, ...rest] = s.split(',');
  const city = norm(cityRaw);
  const country = norm(rest.join(','));
  return { city, country };
}

// PUT: update user profile (Jihye Kim)
router.put('/profile', async (req, res) => {
  if (!req.session?.user) {
    return res.status(401).json({ error: 'Not logged in' });
  }
  const userId = req.session.user.id;
  const displayName  = norm(req.body?.displayName);
  const website      = norm(req.body?.website);
  const bio          = norm(req.body?.bio);
  const ringtoneName = norm(req.body?.ringtoneName);
  const { city, country } = parseLocation(req.body?.location); // e.g. "LA, USA"

  try {
    // --- city / country validation ---
    let newCity = city ? norm(city) : null;
    let newCountry = country ? norm(country) : null;

    if (newCity && newCountry) {
      const check = await pool.query(
        `SELECT 1 FROM city WHERE country = $1 AND cityname = $2`,
        [newCountry, newCity]
      );
      if (check.rows.length === 0) {
        return res.status(400).json({ error: 'Unknown city / country combination' });
      }
    } else {
      // if empty string -> treat as "no change"
      newCity = null;
      newCountry = null;
    }

    await pool.query(
      `
      UPDATE "User"
      SET
        cityname = COALESCE(NULLIF($1, ''), cityname),
        country  = COALESCE(NULLIF($2, ''), country)
      WHERE userid = $3
      `,
      [newCity, newCountry, userId]
    );

    await pool.query(
      `
      INSERT INTO userprofile (userid, display_name, bio, website, ringtone_name, updated_at)
      VALUES ($1, $2, $3, $4, $5, now())
      ON CONFLICT (userid) DO UPDATE SET
        display_name = COALESCE(EXCLUDED.display_name,  userprofile.display_name),
        bio          = COALESCE(EXCLUDED.bio,          userprofile.bio),
        website      = COALESCE(EXCLUDED.website,      userprofile.website),
        ringtone_name= COALESCE(EXCLUDED.ringtone_name,userprofile.ringtone_name),
        updated_at   = now()
      `,
      [userId, displayName, bio, website, ringtoneName]
    );

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});


// GET: settings from userprofile (Jihye Kim)
router.get('/settings', async (req, res) => {
  if (!req.session?.user) return res.status(401).json({ error: 'Not logged in' });
  const userId = req.session.user.id;

  try {
    const { rows } = await pool.query(`
      SELECT
        up.ringtone_name,
        up.settings
      FROM userprofile up
      WHERE up.userid = $1
    `, [userId]);

    const r = rows[0] || {};
    res.json({
      ringtoneName: r?.ringtone_name ?? null,
      settings: r?.settings ?? {}   // {alarm_volume, playlist_url, ...}
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// POST: save avatar URL (ui-avatars)
router.post('/profile/avatar-url', async (req, res) => {
  if (!req.session?.user) {
    return res.status(401).json({ error: 'Not logged in' });
  }

  const userId = req.session.user.id;
  const avatarUrl = norm(req.body?.avatarUrl);

  if (!avatarUrl) {
    return res.status(400).json({ error: 'avatarUrl is required' });
  }

  try {
    await pool.query(
      `
      INSERT INTO userprofile (userid, avatar_url, updated_at)
      VALUES ($1, $2, now())
      ON CONFLICT (userid) DO UPDATE SET
        avatar_url = EXCLUDED.avatar_url,
        updated_at = now()
      `,
      [userId, avatarUrl]
    );

    res.json({ ok: true, avatarUrl });
  } catch (err) {
    console.error('avatar-url update error', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// PUT: update settings in userprofile (Jihye Kim)
router.put('/settings', async (req, res) => {
  if (!req.session?.user) return res.status(401).json({ error: 'Not logged in' });
  const userId = req.session.user.id;

  // ---- validate & normalize ----
  const _vol = req.body?.alarm_volume;
  let alarm_volume = (_vol === undefined || _vol === null) ? undefined
    : Math.max(0, Math.min(100, Number(_vol)));
  if (alarm_volume !== undefined && !Number.isFinite(alarm_volume)) alarm_volume = undefined;

  const playlist_url = (req.body?.playlist_url ?? '').trim() || undefined;

  const nb = (v) => (typeof v === 'boolean' ? v : (v === 'true' ? true : (v === 'false' ? false : undefined)));
  const notificationEnabled = nb(req.body?.notificationEnabled);
  const privateProfile = nb(req.body?.privateProfile);
  const shareAnonData = nb(req.body?.shareAnonData);
  const privacyAgreed = nb(req.body?.privacyAgreed);
  const privacyAgreedAt = req.body?.privacyAgreedAt ? String(req.body.privacyAgreedAt) : undefined;

  const ringtoneName = (req.body?.ringtoneName ?? '').trim() || undefined;

  // settings payload (except undefined)
  const payload = {};
  if (alarm_volume !== undefined) payload.alarm_volume = alarm_volume;
  if (playlist_url !== undefined) payload.playlist_url = playlist_url;
  if (notificationEnabled !== undefined) payload.notificationEnabled = notificationEnabled;
  if (privateProfile !== undefined) payload.privateProfile = privateProfile;
  if (shareAnonData !== undefined) payload.shareAnonData = shareAnonData;
  if (privacyAgreed !== undefined) payload.privacyAgreed = privacyAgreed;
  if (privacyAgreedAt) payload.privacyAgreedAt = privacyAgreedAt;


  try {
    // 1) merge settings (not exist -> INSERT)
    if (Object.keys(payload).length) {
      await pool.query(`
        INSERT INTO userprofile (userid, settings, updated_at)
        VALUES ($1, $2::jsonb, now())
        ON CONFLICT (userid) DO UPDATE SET
          settings  = COALESCE(userprofile.settings, '{}'::jsonb) || $2::jsonb,
          updated_at = now()
      `, [userId, JSON.stringify(payload)]);
    }

    // 2) ringtone_name update
    if (ringtoneName !== undefined) {
      await pool.query(`
        INSERT INTO userprofile (userid, ringtone_name, updated_at)
        VALUES ($1, $2, now())
        ON CONFLICT (userid) DO UPDATE SET
          ringtone_name = EXCLUDED.ringtone_name,
          updated_at = now()
      `, [userId, ringtoneName]);
    }

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// GET: Header profile (Jihye Kim)
router.get('/user/header', async (req, res) => {
  if (!req.session?.user) {
    return res.status(401).json({ error: 'Not logged in' });
  }

  const userId = req.session.user.id;

  try {
    const { rows } = await pool.query(
      `
      SELECT
        u.userid,
        u.name,
        u.created_at AS user_created_at,
        up.display_name,
        up.avatar_url
      FROM "User" u
      LEFT JOIN userprofile up
        ON up.userid = u.userid
      WHERE u.userid = $1
      `,
      [userId]
    );
    
    const r = rows[0];
    
    if (!r) {
      // If no user
      return res.json({
        userid: userId,
        username: null,
        displayName: null,
        avatarUrl: null,
        created_at: null,
      });
    }

    res.json({
      userid:      r.userid,
      username:    r.username,
      displayName: r.display_name,
      avatarUrl:   r.avatar_url,
      created_at:  r.user_created_at,
    });
  } catch (err) {
    console.error('GET /api/user/header error', err);
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;
