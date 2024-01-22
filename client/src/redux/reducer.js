import {
  GET_DOGS,
  GET_DOGS_BY_NAME,
  GET_DOGS_BY_ID,
  GET_TEMPERAMENTS,
  FILTER,
  ORDER,
} from "./actions-types";

const initialState = {
  allDogs: [],
  dogById: [],
  temperaments: [],
  searchDogs: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DOGS:
      return { ...state, allDogs: action.payload, searchDogs: action.payload };
    case GET_DOGS_BY_NAME:
      return { ...state, searchDogs: action.payload };
    case GET_DOGS_BY_ID:
      return { ...state, dogById: action.payload };
    case GET_TEMPERAMENTS:
      return { ...state, temperaments: action.payload };
    case FILTER:
      let tem = action.payload.temp;
      let origin = action.payload.origin;
      let filtro = [];
      let dogs = state.allDogs;
      if (tem === "all") {
        if (origin === "createInBd") {
          filtro = dogs.filter((ele) => ele.createInBd);
        }
        if (origin === "api") {
          filtro = dogs.filter((ele) => !ele.createInBd);
        }
        if (origin === "all") {
          filtro = dogs;
        }
      }
      if (tem !== "all") {
        if (origin === "api") {
          filtro = dogs.filter(
            (ele) =>
              ele.temperament &&
              ele.temperament.includes(tem) &&
              !ele.createInBd
          );
        }
        if (origin === "createInBd") {
          filtro = dogs.filter(
            (ele) =>
              ele.temperament && ele.temperament.includes(tem) && ele.createInBd
          );
        }
        if (origin === "all") {
          filtro = dogs.filter(
            (ele) => ele.temperament && ele.temperament.includes(tem)
          );
        }
      }
      return { ...state, searchDogs: filtro };
    case ORDER:
      let copy = state.searchDogs;
      if (action.payload === "asc") {
        copy = copy.slice().sort((a, b) => {
          const nombreA = a.name.toLowerCase();
          const nombreB = b.name.toLowerCase();

          if (nombreA < nombreB) {
            return -1;
          }
          if (nombreA > nombreB) {
            return 1;
          }
          return 0;
        });
      }
      if (action.payload === "desc") {
        copy = copy.slice().sort((a, b) => {
          const nombreA = a.name.toLowerCase();
          const nombreB = b.name.toLowerCase();

          if (nombreA > nombreB) {
            return -1;
          }
          if (nombreA < nombreB) {
            return 1;
          }
          return 0;
        });
      }
      if (action.payload === "pme") {
        copy = copy.slice().sort((a, b) => {
          const pesoA = parseInt(a.weight.split(" - ")[1], 10);
          const pesoB = parseInt(b.weight.split(" - ")[1], 10);

          return pesoA - pesoB;
        });
      }
      if (action.payload === "pma") {
        copy = copy.slice().sort((a, b) => {
          const pesoA = parseInt(a.weight.split(" - ")[1], 10);
          const pesoB = parseInt(b.weight.split(" - ")[1], 10);

          return pesoB - pesoA;
        });
      }

      return { ...state, searchDogs: copy };
    default:
      return { ...state };
  }
};

export default reducer;
