const express = require("express");
const getTemperaments = require("../controllers/GetTemperaments");

const temperamentsRouter = express.Router();

temperamentsRouter.get("/", async (req, res) => {
  try {
    const temperaments = await getTemperaments();
    res.status(200).json(temperaments);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = temperamentsRouter;
