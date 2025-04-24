import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import bcrypt from "bcrypt";
import { pool } from "../db.js";
// __dirname workaround for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();


// Serve the login page
router.get("/signin", (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontend/login.html"));
});

router.get("/", (req, res) => {
  res.redirect("/signin");
});

router.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontend/register.html"));
});

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

    res.redirect("/dashboard");
  } catch (err) {
    console.error(err);
    res.send("Something went wrong during sign-in.");
  }
});

router.post("/register", async (req, res) => {
  console.log(req.body);

  const {username, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    await pool.query(
      `INSERT INTO "User" (userID, name, email, password_hash)
       VALUES (gen_random_uuid(), $1, $2, $3)`,
      [username, email, hashedPassword]
    );

    res.redirect("/signin");
  } catch (err) {
    console.error(err);
    res.send("Error registering user.");
  }
});

  
export default router;
