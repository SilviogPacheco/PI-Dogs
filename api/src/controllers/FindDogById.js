const { Dog, Temperament } = require("../db");
const axios = require("axios");
const { API_KEY } = process.env;

const esUUID = (id) => {
  const uuidRegex =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return uuidRegex.test(id);
};

const findDogByID = async (id) => {
  if (esUUID(id)) {
    const dogBd = await Dog.findByPk(id, {
      include: {
        model: Temperament,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });
    if (dogBd.length > 0) return dogBd;
    else throw new Error("no se encontraron perros con ese ID");
  }
  if (!esUUID(id)) {
    const response = await axios.get(
      `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`
    );
    const dogApi = response.data.filter((dog) => dog.id === parseInt(id));
    if (dogApi.length > 0) return dogApi;
    else throw new Error("no se encontraron perros con ese ID");
  }
};

module.exports = findDogByID;
