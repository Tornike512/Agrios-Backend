const express = require("express");
const cors = require("cors");
const path = require("path");
const healthyFood = require("./public/Projects/healthyFood");
const agricultureFarming = require("./public/Projects/agricultureFarming");
const easyHarvesting = require("./public/Projects/easyHarvesting");
const ecologicalFarming = require("./public/Projects/ecologicalFarming");
const freshProducts = require("./public/Projects/freshProducts");
const organicSolutions = require("./public/Projects/organicSolutions");
const products = require("./public/Products/products");

const app = express();

app.use(cors());

app.get("/projects/healthyFood", (req, res) => {
  res.json(healthyFood);
});

app.get("/projects/agricultureFarming", (req, res) => {
  res.json(agricultureFarming);
});

app.get("/projects/easyHarvesting", (req, res) => {
  res.json(easyHarvesting);
});

app.get("/projects/ecologicalFarming", (req, res) => {
  res.json(ecologicalFarming);
});

app.get("/projects/freshProducts", (req, res) => {
  res.json(freshProducts);
});

app.get("/projects/organicSolutions", (req, res) => {
  res.json(organicSolutions);
});

app.get("/products/products", (req, res) => {
  res.json(products);
});

const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => console.log("server started", PORT));
