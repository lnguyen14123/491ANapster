import express from "express";
import path from "path";

// instantiate global objects

const router = express.Router();
const __dirname = path.resolve();

// redirect path to signin
router.get("/", (req, res) => {
  res.redirect("/signin");
});

// serve the dashboard page or send to sign in if not logged in
router.get("/dashboard", (req, res) => {
  if (!req.session.user) {
    return res.redirect("/signin");
  }

  res.sendFile(path.join(__dirname, "../frontend/dashboard.html"));
});

// serve the napping page or send to sign in if not logged in
router.get("/nappingPage", (req, res) => {
  if (!req.session.user) {
    return res.redirect("/signin");
  }

  res.sendFile(path.join(__dirname, "../frontend/nappingPage.html"));
});

export default router;
