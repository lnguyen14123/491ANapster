import express from "express";
import path from "path";
import { pool } from "../db.js";  

const router = express.Router();
const __dirname = path.resolve();

// Send the username as JSON
router.get("/user", (req, res) => {

    if (!req.session.user) {
        
        return res.status(401).json({ error: "Not logged in" });
      }
    
      res.json({ username: req.session.user.name });        
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

export default router;
