# 🧩 Pokédex Search System

An end-to-end Pokédex application that ingests data from the public PokéAPI, stores cleaned and normalized Pokémon data in a database, and exposes a powerful search and filtering API with a simple React-based UI.

---

## 🚀 Project Objective

The goal of this project is to demonstrate how to:
- Consume and process data from a public API
- Design a clean and query-optimized data model
- Build a flexible backend search API with filtering and sorting
- Visualize backend functionality using a lightweight frontend

In short: **turn raw API data into a searchable, user-friendly system**.

---

## 🏗️ System Architecture

PokeAPI
↓
Data Ingestion Script
↓
MongoDB (Normalized Pokémon Data)
↓
Express.js Search API
↓
React UI (Filters + Results)


---

## 🛠️ Tech Stack

### Backend
- **Node.js**
- **Express.js**
- **MongoDB (Local)**
- **Mongoose**
- **Axios**

### Frontend
- **React**
- **Fetch API**
- **CSS**

---

## 📁 Project Structure


pokedex/
├── backend/
│ ├── src/
│ │ ├── config/ # Database connection
│ │ ├── models/ # Mongoose schemas
│ │ ├── controllers/ # Search & filter logic
│ │ ├── routes/ # API routes
│ │ └── scripts/ # Data ingestion scripts
│ ├── server.js # Express app entry point
│ ├── .env # Environment variables
│ └── package.json
│
└── frontend/
├── src/
│ ├── App.js # UI logic
│ ├── App.css # Styling
│ └── index.js
└── package.json


---

## 🔄 Data Ingestion Flow

1. Fetch all Pokémon from the PokéAPI using pagination
2. Fetch detailed data for each Pokémon
3. Extract only essential attributes:
   - Name
   - Height & Weight
   - Types
   - Stats (HP, Attack, Defense, Speed)
4. Store cleaned data into MongoDB
5. Run ingestion **once** using a dedicated script

---

## 🔍 Search API Features

**Endpoint**
GET /api/pokemon/search


### Supported Query Parameters
| Parameter | Description |
|--------|------------|
| `q` | Search by Pokémon name (partial, case-insensitive) |
| `type` | Filter by Pokémon type |
| `minAttack` | Minimum attack stat |
| `minHp` | Minimum HP stat |
| `minSpeed` | Minimum speed stat |
| `sortBy` | Sort by `stats.attack`, `stats.hp`, or `stats.speed` |
| `order` | `asc` or `desc` |

### Example
/api/pokemon/search?q=pika&type=electric&minAttack=50&sortBy=stats.attack&order=desc


---

## 🎨 Frontend UI

The React UI provides:
- Text-based search
- Dropdown filters for Pokémon type
- Sliders for stat filtering
- Sorting controls
- Card-based result display
- Loading and empty states

The UI is intentionally minimal and focused on **demonstrating backend capabilities**.

---

## ▶️ How to Run the Project

### 1️⃣ Prerequisites
- Node.js (v18+)
- MongoDB Community Edition (local)

---

### 2️⃣ Backend Setup

#bash
  cd backend
  npm install
  Create a .env file:
    MONGO_URI=mongodb://127.0.0.1:27017/pokedex
    PORT=5000


Run data ingestion (one-time):

node src/scripts/seedPokemon.js


Start backend server:

npm run dev

3️⃣ Frontend Setup
  cd frontend
  npm install
  npm start


Open:

http://localhost:3000

🧠 Key Engineering Decisions

Separated ingestion from runtime server to avoid repeated writes

Normalized schema for efficient querying

Regex-based search for better UX over strict full-text search

Controlled sorting fields to prevent unsafe queries

Minimal UI to validate backend logic clearly

📌 Future Enhancements

Pagination support

Redis caching for frequent searches

Semantic search using embeddings

Dockerized deployment

Cloud deployment (GCP / AWS)

🏁 Summary

This project demonstrates practical backend engineering skills:

API design

Data modeling

Search and filtering logic

Clean separation of concerns

End-to-end system thinking


👤 Author
B. Jagadeesh
