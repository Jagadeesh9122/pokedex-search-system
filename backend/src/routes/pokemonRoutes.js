const express = require("express");
const router = express.Router();
const { searchPokemon } = require("../controllers/pokemonController");

router.get("/search", searchPokemon);

module.exports = router;
