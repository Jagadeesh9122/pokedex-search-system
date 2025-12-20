const axios = require("axios");
const Pokemon = require("../models/Pokemon");

const fetchAllPokemon = async () => {
  let url = "https://pokeapi.co/api/v2/pokemon?limit=100";
  
  while (url) {
    const res = await axios.get(url);
    url = res.data.next;

    for (const p of res.data.results) {
      const details = await axios.get(p.url);

      const stats = {};
      details.data.stats.forEach(s => {
        if (["hp", "attack", "defense", "speed"].includes(s.stat.name)) {
          stats[s.stat.name] = s.base_stat;
        }
      });

      const pokemonData = {
        name: details.data.name,
        height: details.data.height,
        weight: details.data.weight,
        types: details.data.types.map(t => t.type.name),
        stats
      };

      await Pokemon.updateOne(
        { name: pokemonData.name },
        pokemonData,
        { upsert: true }
      );

      console.log(`Saved: ${pokemonData.name}`);
    }
  }
};

module.exports = fetchAllPokemon;
