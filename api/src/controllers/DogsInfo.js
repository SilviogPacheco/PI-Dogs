const axios = require("axios");
const { Dog, Temperament } = require("../db");
const { API_KEY } = process.env;

const DogInfoApi = async () => {
  const response = await axios.get(
    `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`
  );

  const dogs = response.data.map((dog) => {
    return {
      id: dog.id,
      name: dog.name,
      image: dog.image.url,
      temperament: dog.temperament,
      weight: dog.weight.metric + " kg",
      height: dog.height.metric + " cm",
      life_span: dog.life_span,
    };
  });
  return dogs;
};

const DogInfoDb = async () => {
  return await Dog.findAll({
    include: {
      model: Temperament,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
};

const allDogs = async () => {
  const infoApi = await DogInfoApi();
  const infoDb = await DogInfoDb();
  const allInfo = infoApi.concat(infoDb);
  return allInfo;
};

const dogsByName = async (name) => {
  const dogs = await allDogs();
  const dogName = dogs.filter((dog) => {
    return dog.name.toLowerCase().includes(name.toLowerCase());
  });
  if (dogName.length > 0) return dogName;
  else throw new Error("no se encontraron perros");
};
module.exports = { allDogs, dogsByName, DogInfoApi };
