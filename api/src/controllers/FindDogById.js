const { allDogs } = require("./DogsInfo");

const esUUID = (id) => {
  const uuidRegex =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return uuidRegex.test(id);
};

const findDogByID = async (id) => {
  const dogs = await allDogs();

  if (esUUID(id)) {
    const dogBd = dogs.filter((el) => el.id === id);
    console.log(dogBd);
    if (dogBd.length > 0) return dogBd;
    else throw new Error("no se encontraron perros con ese ID");
  }
  if (!esUUID(id)) {
    const dogApi = dogs.filter((el) => el.id === parseInt(id));
    if (dogApi.length > 0) return dogApi;
    else throw new Error("no se encontraron perros con ese ID");
  }
};

module.exports = findDogByID;
