import express from "express";
import path from "path";

const router = express.Router();
const __dirname = path.resolve();

// Example routes
router.get("/", (req, res) => {
  res.redirect("/signin");
});

router.get("/dashboard", (req, res) => {
  if (!req.session.user) {
    return res.redirect("/signin");
  }

  res.sendFile(path.join(__dirname, "../frontend/dashboard.html"));
});

export default router;
