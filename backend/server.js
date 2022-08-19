const express = require("express");
const pokeData = require("./data/pokeData");

const app = express();

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/products", (req, res) => {
  res.send(pokeData);
});

app.get("/api/products/:id", (req, res) => {
  const pokemon = pokeData.find((p) => p._id == req.params.id);
  res.json(pokemon);
});

app.listen(5000, console.log("Server running on port 5000"));
