const mongoose = require("mongoose");

const PokemonSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  height: Number,
  weight: Number,
  types: [String],
  stats: {
    hp: Number,
    attack: Number,
    defense: Number,
    speed: Number
  }
});

PokemonSchema.index({ name: "text", types: "text" });

module.exports = mongoose.model("Pokemon", PokemonSchema);
