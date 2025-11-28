import express from "express";
import path from "path";
import { pool } from "../db.js";
import { randomUUID } from "crypto"; // built-in in Node.js v14+

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

    const queryAdd = `
      INSERT INTO "scheduleSleepNap" (userid, "napHours", "sleepStart", "sleepEnd")
      VALUES ${queryValues.map((_, i) => `($${i * 4 + 1}, $${i * 4 + 2}, $${i * 4 + 3}, $${i * 4 + 4})`).join(", ")}
    `;

    const queryFlat = queryValues.flat()

    await pool.query(queryAdd, queryFlat);

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

export default router;
