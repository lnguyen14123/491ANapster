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
  

export default router;
