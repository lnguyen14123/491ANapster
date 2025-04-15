const mongoose = require("mongoose");

const napSchema = new mongoose.Schema({
  name: { type: String, required: true },
  time: { type: String, required: true },
});

module.exports = mongoose.model("Nap", napSchema);
