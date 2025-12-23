🧩 Pokédex Search System
## A full-stack Pokédex application that enables natural-language, full-text, and semantic search over Pokémon data. Built as part of the Intern – Developer assessment.

# 🚀 Live Demo
Frontend (Vercel): https://pokedex-search-system.vercel.app/
Backend (Render): https://pokedex-backend-service.onrender.com

# 📌 Features
  Extracts Pokémon data from PokéAPI
  Stores cleaned data in MongoDB Atlas
  Implements full-text search using MongoDB text indexes
  Implements semantic search by interpreting user intent from natural language

# Supports search by:
Pokémon name
Type
Attributes like fast, strong, high HP
Clean natural-language search UI (no sliders or dropdowns)
Fully deployed frontend and backend

# 🔍 Search Capabilities (Examples)
Users can search using free-text queries, such as:
pikachu
char lizard
electric type pokemons
fast electric pokemon
strong fire pokemon
tank water pokemon

The backend parses the query semantically and maps it to appropriate database filters.

# 🛠️ Tech Stack
Frontend
  React
  CSS
  Deployed on Vercel

Backend
  Node.js
  Express.js
  MongoDB (Atlas)
  Mongoose
  Deployed on Render

Database
  MongoDB Atlas

Text indexes on Pokémon name, type, and abilities

# 🧠 How Semantic Search Works

User enters a natural-language query

Backend performs:

MongoDB full-text search on Pokémon name and type
Semantic intent parsing for keywords like:
fast → high speed
strong → high attack
tank → high HP

Pokémon types (fire, electric, water, etc.)

Results are ranked by relevance and returned to the UI

📂 Project Structure
pokedex-search-system/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   └── routes/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   └── App.js
│   └── package.json
│
└── README.md

▶️ Run Locally
Backend
cd backend
npm install
npm run dev

Frontend
cd frontend
npm install
npm start

👤 Author

Baddila Jagadeesh
GitHub: https://github.com/Jagadeesh9122