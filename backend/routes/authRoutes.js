import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import bcrypt from "bcryptjs";
import { pool } from "../db.js";
import { randomUUID } from "crypto"; // built-in in Node.js v14+


// __dirname workaround for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();


// Serve the login page
router.get("/signin", (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontend/login.html"));
});

// set default page as /signin
router.get("/", (req, res) => {
  res.redirect("/signin");
});

// serve the register page
router.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontend/register.html"));
});

// handle post to sign in path, handle authentication and login
router.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Get the user from the database
    const result = await pool.query(
      `SELECT * FROM "User" WHERE email = $1`,
      [email]
    );

    if (result.rows.length === 0) {
      return res.redirect("/signin?error=notfound");
    }

    const user = result.rows[0];

    // Compare passwords
    const match = await bcrypt.compare(password, user.password_hash);

    if (!match) {
      return res.redirect("/signin?error=invalidpassword");
    }

    // If password matches, "log in" the user
    req.session.user = {
      id: user.userid,
      email: user.email,
      name: user.name
    };

    res.redirect("/nappingPage");
  } catch (err) {
    console.error(err);
    res.send("Something went wrong during sign-in.");
  }
});

// handle post to register path, handle authentication and login
router.post("/register", async (req, res) => {
  console.log(req.body);

  const {username, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const userID = randomUUID();

    await pool.query(
      `INSERT INTO "User" (userID, name, email, password_hash)
        VALUES ($1, $2, $3, $4)`,
        [userID, username, email, hashedPassword]
    );

    await pool.query(
      `INSERT INTO "nappingprofile" (userid, currentstreak, longeststreak, nappingpoints, averagenapquality, preferrednaplen)
       VALUES ($1, 0, 0, 0, 0, 1800)`,
       [userID]
    );


    res.redirect("/signin");
  } catch (err) {
    console.error(err);
    res.send("Error registering user.");
  }
});

// handle post to logout path, log out the user and end their session
router.post("/logout", (req, res) => {
  req.session.destroy(err => {
    if (err) {
      console.error("Error destroying session:", err);
      return res.status(500).json({ error: "Failed to log out" });
    }

    // Clear cookie as well (optional but good practice)
    res.clearCookie("connect.sid");

    // Redirect to signin page
    res.redirect("/signin");
  });
});

// Serve the forgot password page -- Kate Dinh
router.get("/forgot-password", (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontend/forgot-password.html"));
});

// Handle forgot password form submission
router.post("/forgot-password", async (req, res) => {
  const { email, newPassword } = req.body;

  try {
    // Check if user exists
    const result = await pool.query(
      `SELECT userid FROM "User" WHERE email = $1`,
      [email]
    );

    if (result.rows.length === 0) {
      // No user with that email
      return res.redirect("/forgot-password?status=notfound");
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    await pool.query(
      `UPDATE "User" SET password_hash = $1 WHERE email = $2`,
      [hashedPassword, email]
    );

    // Redirect back to login with a success message
    res.redirect("/signin?reset=success");
  } catch (err) {
    console.error("Error resetting password:", err);
    res.redirect("/forgot-password?status=error");
  }
});

// POST: Change password (Jihye Kim)
router.post("/changePassword", async (req, res) => {
  try {
    const userID = req.session.user?.id;
    if (!userID) {
      return res.status(401).send("Not logged in");
    }

    const { currentPassword, newPassword } = req.body || {};
    if (!currentPassword || !newPassword) {
      return res.status(400).send("Missing password fields");
    }

    // 1) Retrieve the current user's password hash
    const result = await pool.query(
      `SELECT password_hash
       FROM "User"
       WHERE userid = $1`,
      [userID]
    );

    const user = result.rows[0];
    if (!user) {
      return res.status(404).send("User not found");
    }

    if (!user.password_hash) {
      console.error("password_hash is NULL/undefined for user:", userID, user);
      return res
        .status(500)
        .send("Password is not set properly for this user.");
    }

    // 2) Compare it with the current password (same pattern as login)
    const match = await bcrypt.compare(currentPassword, user.password_hash);
    if (!match) {
      return res.status(400).send("Current password is incorrect");
    }

    // 3) Hash the new password and save it
    const SALT_ROUNDS = 10;
    const newHash = await bcrypt.hash(newPassword, SALT_ROUNDS);

    await pool.query(
      `UPDATE "User"
       SET password_hash = $1
       WHERE userid = $2`,
      [newHash, userID]
    );

    res.send("Password updated successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Something went wrong while changing password");
  }
});

  
export default router;
