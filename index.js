const express = require("express");
const cors = require("cors");
const path = require("path");
const healthyFood = require("./public/Projects/healthyFood");
const agricultureFarming = require("./public/Projects/agricultureFarming");

const app = express();

app.use(cors());

app.get("/projects/healthyFood", (req, res) => {
  res.json(healthyFood);
});

app.get("/projects/agricultureFarming", (req, res) => {
  res.json(agricultureFarming);
});

const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => console.log("server started", PORT));
