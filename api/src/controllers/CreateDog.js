const { Dog, Temperament } = require("../db");

const createDog = async ({
  name,
  image,
  height,
  weight,
  life_span,
  temperaments,
}) => {
  const newDog = await Dog.create({
    name,
    image,
    height,
    weight,
    life_span,
    temperaments,
  });

  const temperamentsDb = await Temperament.findAll({
    where: { name: temperaments },
  });
  newDog.addTemperaments(temperamentsDb);
  return newDog;
};

module.exports = createDog;
