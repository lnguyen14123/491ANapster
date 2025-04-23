const express = require("express");
const path = require("path");
const router = express.Router();

// Serve the login page
router.get("/signin", (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontend/login.html"));
});

router.get("/", (req, res) => {
    res.redirect("/signin");
  });


router.post("/signin", (req, res) => {

    console.log("SIGNIN PRESSED");

  const { email, password } = req.body;

  // Replace with your actual login logic
  if (email === "test@example.com" && password === "password123") {
    // Example: set session or token
    req.session.user = { email };
    res.redirect("/dashboard");
  } else {
    res.redirect("/signin?error=invalid");
  }
});


  
module.exports = router;
