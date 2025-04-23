const express = require("express");
const cors = require("cors");
const path = require("path");
const authRoutes = require("./routes/authRoutes");

const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../frontend")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Use the auth routes
app.use("/", authRoutes);

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
