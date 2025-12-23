import { useState } from "react";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchPokemon = async () => {
    if (!query.trim()) return;

    setLoading(true);
    setError("");
    setResults([]);

    try {
      const res = await fetch(
        `https://pokedex-backend-service.onrender.com/api/pokemon/search?q=${encodeURIComponent(
          query
        )}`
      );

      const data = await res.json();
      setResults(data.data || []);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      searchPokemon();
    }
  };

  return (
    <div className="container">
      <h1>Pokédex Search</h1>

      <p className="subtitle">
        Search using natural language (e.g.{" "}
        <i>“electric type”, “fast fire pokemon”, “pikachu”</i>)
      </p>

      <div className="search-box">
        <input
          type="text"
          placeholder="Type your search here..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          className="search-input"
        />
        <button onClick={searchPokemon} className="search-button">Search</button>
      </div>

      {loading && <p>Loading Pokémon...</p>}
      {error && <p className="error">{error}</p>}

      {!loading && results.length === 0 && query && (
        <p>No Pokémon found</p>
      )}

      <div className="results">
        {results.map((p) => (
          <div className="card" key={p._id}>
            <h3>{p.name}</h3>
            <p>
              <b>Types:</b> {p.types.join(", ")}
            </p>
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
