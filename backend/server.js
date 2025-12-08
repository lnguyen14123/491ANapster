
// library imports

import express from "express";
import cors from "cors";
import path from "path";
import bodyParser from "body-parser";
import session from "express-session";

import authRoutes from "./routes/authRoutes.js";
import appRoutes from "./routes/appRoutes.js";
import apiRoutes from "./routes/api.js";
import { Pool } from "pg";
import dotenv from "dotenv";
import musicRoutes from "./routes/musicRoutes.js"; // Kate Dinh add for musicApi


// Required to simulate __dirname in ES Modules
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// create the app and set the port
const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../frontend")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/music", musicRoutes); //Kate Dinh create for music API
app.use("/audio", express.static(path.join(__dirname, "audio"))); // Kate-Serve local audio



// create session for prototype site
app.use(
  session({
    secret: "supersecretkey", // change this for production!
    resave: false,
    saveUninitialized: true,
  })
);

// add routes to the app
app.use("/", authRoutes);
app.use("/", appRoutes);
app.use("/api", apiRoutes);

dotenv.config();

// set pool to database connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export default pool;


// start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
