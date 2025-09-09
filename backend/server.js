import express from "express";
import cors from "cors";
import path from "path";
import bodyParser from "body-parser";
import session from "express-session";

import authRoutes from "./routes/authRoutes.js";
import appRoutes from "./routes/appRoutes.js";
import apiRoutes from "./routes/api.js";


// Required to simulate __dirname in ES Modules
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../frontend")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  session({
    secret: "supersecretkey", // change this for production!
    resave: false,
    saveUninitialized: true,
  })
);

app.use("/", authRoutes);
app.use("/", appRoutes);
app.use("/api", apiRoutes);


import { Pool } from "pg";
import dotenv from "dotenv";
dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export default pool;

// Dummy login endpoint
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Replace this with real auth logic
  if (email === "admin@example.com" && password === "password") {
    return res.json({ success: true, message: "Login successful!" });
  }

  return res.status(401).json({ success: false, message: "Invalid credentials" });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
