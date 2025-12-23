const Pokemon = require("../models/Pokemon");

exports.searchPokemon = async (req, res) => {
  try {
    const { q } = req.query;

    if (!q || q.trim().length === 0) {
      return res.json({ count: 0, data: [] });
    }

    const query = q.toLowerCase();
    const filter = {};

    // ---------- Semantic Parsing ----------
    const TYPES = [
      "electric","fire","water","grass","flying","psychic",
      "rock","ground","ice","dragon","dark","fairy","steel",
      "bug","ghost","poison","fighting","normal"
    ];

    const matchedTypes = TYPES.filter(type => query.includes(type));
    if (matchedTypes.length > 0) {
      filter.types = { $in: matchedTypes };
    }

    if (query.includes("fast")) {
      filter["stats.speed"] = { $gte: 80 };
    }

    if (query.includes("strong")) {
      filter["stats.attack"] = { $gte: 80 };
    }

    if (query.includes("tank")) {
      filter["stats.hp"] = { $gte: 80 };
    }

    // ---------- Full-text + Semantic Search ----------
    const pokemon = await Pokemon.find(
      {
        $text: { $search: q },
        ...filter
      },
      {
        score: { $meta: "textScore" }
      }
    )
      .sort({ score: { $meta: "textScore" } })
      .limit(20);

    res.json({
      count: pokemon.length,
      data: pokemon
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
