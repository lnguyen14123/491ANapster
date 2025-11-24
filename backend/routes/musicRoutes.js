// backend/routes/musicRoutes.js
import express from "express";
import fetch from "node-fetch";

// imports for local audio listing
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const router = express.Router();

// resolve path to ../audio relative to this file
const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);
const AUDIO_DIR  = path.join(__dirname, "..", "audio");

// -------- Deezer proxy  --------
const deezer = async (endpoint) => {
  const r = await fetch(`https://api.deezer.com/${endpoint}`);
  if (!r.ok) throw new Error(`Deezer error ${r.status}`);
  return r.json();
};

// Keyword search
router.get("/search", async (req, res) => {
  try {
    const q = (req.query.q || "sleep music").toString();
    const data = await deezer(`search?q=${encodeURIComponent(q)}`);
    res.json(data);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Music search failed" });
  }
});

// Curated moods
const MOODS = {
  rain: "rain sound sleep",
  white_noise: "white noise sleep",
  ocean: "ocean waves sleep",
  piano: "piano sleep",
  lofi: "lofi sleep",
  forest: "forest night ambience",
};

router.get("/mood/:id", async (req, res) => {
  try {
    const q = MOODS[req.params.id] || "sleep music";
    const data = await deezer(`search?q=${encodeURIComponent(q)}`);
    res.json(data);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Mood fetch failed" });
  }
});

// Local audio library
// GET /api/music/audio  ->  [{ file, url, title }]
router.get("/audio", async (_req, res) => {
  try {
    const files = await fs.readdir(AUDIO_DIR);
    const items = (files || [])
      .filter(f => /\.(mp3|m4a|ogg|wav)$/i.test(f))
      .map(f => ({
        file: f,
        url: "/audio/" + encodeURIComponent(f),                // served by server.js
        title: f.replace(/\.[a-z0-9]+$/i, "").replace(/[-_]+/g, " ") // friendly
      }));
    res.json(items);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Cannot read audio dir" });
  }
});

export default router;
