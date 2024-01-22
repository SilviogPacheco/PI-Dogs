import axios from "axios";
import {
  CREATE_DOG,
  FILTER,
  GET_DOGS,
  GET_DOGS_BY_ID,
  GET_DOGS_BY_NAME,
  GET_TEMPERAMENTS,
  ORDER,
} from "./actions-types";

const getDogs = () => {
  return async function (dispatch) {
    const response = await axios.get("http://localhost:3001/dogs");
    dispatch({ type: GET_DOGS, payload: response.data });
  };
};

const getDogsByName = (name) => {
  return async function (dispatch) {
    const response = await axios.get(`http://localhost:3001/dogs?name=${name}`);
    dispatch({ type: GET_DOGS_BY_NAME, payload: response.data });
  };
};

const getDogById = (id) => {
  return async function (dispatch) {
    const response = await axios.get(`http://localhost:3001/dogs/${id}`);
    dispatch({ type: GET_DOGS_BY_ID, payload: response.data });
  };
};

const getTemperaments = () => {
  return async function (dispatch) {
    const response = await axios.get("http://localhost:3001/temperaments");
    dispatch({ type: GET_TEMPERAMENTS, payload: response.data });
  };
};

const createDog = (form) => {
  return async function (dispatch) {
    const response = await axios.post("http://localhost:3001/dogs", form);
    dispatch({ type: CREATE_DOG, payload: response.data });
  };
};

const filter = (filtro) => {
  return async function (dispatch) {
    dispatch({ type: FILTER, payload: filtro });
  };
};

const order = (sort) => {
  return async function (dispatch) {
    dispatch({ type: ORDER, payload: sort });
  };
};

export {
  getDogs,
  getDogsByName,
  getDogById,
  getTemperaments,
  createDog,
  filter,
  order,
};
