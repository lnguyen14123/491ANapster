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


export default router;
