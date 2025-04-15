const express = require("express");
const router = express.Router();
const Nap = require("../models/Nap");

// POST /naps
router.post("/", async (req, res) => {
  try {
    const nap = new Nap(req.body);
    const savedNap = await nap.save();
    res.status(201).json(savedNap);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET /naps
router.get("/", async (req, res) => {
  try {
    const naps = await Nap.find();
    res.json(naps);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
