const { Router } = require("express");
const { allDogs, dogsByName } = require("../controllers/DogsInfo");
const findDogById = require("../controllers/FindDogById");
const createDog = require("../controllers/CreateDog");

const dogRoutes = Router();

dogRoutes.get("/", async (req, res) => {
  try {
    const name = req.query.name;
    if (name) {
      const dogs = await dogsByName(name);
      return res.status(200).json(dogs);
    } else {
      const dogs = await allDogs();
      res.status(200).json(dogs);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

dogRoutes.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const dog = await findDogById(id);
    res.status(200).json(dog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

dogRoutes.post("/", async (req, res) => {
  try {
    const { name, image, height, weight, life_span, temperaments } = req.body;
    const newDog = await createDog({
      name,
      image,
      height,
      weight,
      life_span,
      temperaments,
    });
    res.status(200).json({ message: "creado con éxito" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = dogRoutes;
