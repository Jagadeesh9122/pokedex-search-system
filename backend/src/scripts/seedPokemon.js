require("dotenv").config();
const connectDB = require("../config/db");
const fetchAllPokemon = require("./fetchPokemon");

(async () => {
  await connectDB();
  await fetchAllPokemon();
  console.log("Pokémon data seeded");
  process.exit(0);
})();
