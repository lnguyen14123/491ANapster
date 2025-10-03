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
      VALUES ($1, $2, NOW())`,
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
        SET napend = NOW()
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


export default router;
