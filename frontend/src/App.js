import { useState } from "react";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("");
  const [minAttack, setMinAttack] = useState(0);
  const [minHp, setMinHp] = useState(0);
  const [minSpeed, setMinSpeed] = useState(0);
  const [sortBy, setSortBy] = useState("");
  const [order, setOrder] = useState("desc");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchPokemon = async () => {
    setLoading(true);

    const params = new URLSearchParams({
      q: query,
      type,
      minAttack,
      minHp,
      minSpeed,
      sortBy,
      order
    });

    const res = await fetch(
  "https://pokedex-backend-service.onrender.com/api/pokemon/search?" + params
);
    const data = await res.json();

    setResults(data.data || []);
    setLoading(false);
  };

  return (
    <div className="container">
      <h1>Pokédex Search</h1>

      <div className="filters">
        <input
          placeholder="Search Pokémon name"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />

        <select value={type} onChange={e => setType(e.target.value)}>
          <option value="">All Types</option>
          <option value="electric">Electric</option>
          <option value="fire">Fire</option>
          <option value="water">Water</option>
          <option value="grass">Grass</option>
          <option value="dragon">Dragon</option>
        </select>

        <label>Min Attack: {minAttack}</label>
        <input
          type="range"
          min="0"
          max="150"
          value={minAttack}
          onChange={e => setMinAttack(e.target.value)}
        />

        <label>Min HP: {minHp}</label>
        <input
          type="range"
          min="0"
          max="150"
          value={minHp}
          onChange={e => setMinHp(e.target.value)}
        />

        <label>Min Speed: {minSpeed}</label>
        <input
          type="range"
          min="0"
          max="150"
          value={minSpeed}
          onChange={e => setMinSpeed(e.target.value)}
        />

        <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
          <option value="">Sort By</option>
          <option value="stats.attack">Attack</option>
          <option value="stats.hp">HP</option>
          <option value="stats.speed">Speed</option>
        </select>

        <select value={order} onChange={e => setOrder(e.target.value)}>
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </select>

        <button onClick={searchPokemon}>Search</button>
      </div>

      {loading && <p>Loading Pokémon...</p>}

      {!loading && results.length === 0 && (
        <p>No Pokémon found</p>
      )}

      <div className="results">
        {results.map(p => (
          <div className="card" key={p._id}>
            <h3>{p.name}</h3>
            <p><b>Types:</b> {p.types.join(", ")}</p>
            <p>⚔️ Attack: {p.stats.attack}</p>
            <p>❤️ HP: {p.stats.hp}</p>
            <p>⚡ Speed: {p.stats.speed}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
