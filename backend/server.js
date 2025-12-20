require("dotenv").config();
const cors = require("cors");
const express = require("express");
const connectDB = require("./src/config/db");

const pokemonRoutes = require("./src/routes/pokemonRoutes");



const app = express();
connectDB();

app.use(express.json());
app.use(cors());
app.use("/api/pokemon", pokemonRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
