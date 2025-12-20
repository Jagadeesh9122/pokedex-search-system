const Pokemon = require("../models/Pokemon");

exports.searchPokemon = async (req, res) => {
  try {
    const {
      q,
      type,
      minAttack,
      minHp,
      minSpeed,
      sortBy,
      order
    } = req.query;

    const filter = {};
    const sort = {};

    
    if (q) {
      filter.name = { $regex: q, $options: "i" };
    }

    
    if (type) {
      filter.types = { $in: [type.toLowerCase()] };
    }

   

    if (minAttack) {
      filter["stats.attack"] = { $gte: Number(minAttack) };
    }

    if (minHp) {
      filter["stats.hp"] = { $gte: Number(minHp) };
    }

    if (minSpeed) {
      filter["stats.speed"] = { $gte: Number(minSpeed) };
    }

    
    const allowedSortFields = [
      "stats.attack",
      "stats.hp",
      "stats.speed"
    ];

    if (sortBy && allowedSortFields.includes(sortBy)) {
      sort[sortBy] = order === "asc" ? 1 : -1;
    }



    const pokemon = await Pokemon.find(filter)
      .sort(sort)
      .limit(50);

    res.json({
      count: pokemon.length,
      data: pokemon
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
