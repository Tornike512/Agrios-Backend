const express = require("express");
const cors = require("cors");
const path = require("path");
const healthyFood = require("./public/healthyFood");

const app = express();

app.use(cors());

app.get("/api/healthyFood", (req, res) => {
  res.json(healthyFood);
});

const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => console.log("server started", PORT));
