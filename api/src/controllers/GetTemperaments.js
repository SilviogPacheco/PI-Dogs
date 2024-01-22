const axios = require("axios");
const { Temperament } = require("../db");
const { API_KEY } = process.env;

const getTemperaments = async () => {
  const allDogs = await axios.get(
    `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`
  );
  const dogsInfo = [];

  allDogs.data
    .map((dog) => dog.temperament)
    .forEach((elem) => {
      if (elem) {
        const palabras = elem.split(",");
        dogsInfo.push(palabras);
      }
    });
  const dogs = [].concat.apply([], dogsInfo);
  const trimmedArray = dogs.map((item) => item.trim());

  const uniqueArray = trimmedArray.filter((item, index) => {
    return trimmedArray.indexOf(item) === index;
  });

  uniqueArray.forEach((el) => {
    Temperament.findOrCreate({
      where: { name: el },
    });
  });
  const allTeams = await Temperament.findAll();
  return allTeams;
};

module.exports = getTemperaments;
