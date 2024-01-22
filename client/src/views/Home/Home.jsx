import Cards from "../../components/Cards/Cards";
import Paginado from "../../components/Paginado/Paginado";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDogs, getTemperaments } from "../../redux/actions";
import style from "./Home.module.css";

const Home = () => {
  const dispatch = useDispatch();
  const dogs = useSelector((state) => state.searchDogs);
  const order = useSelector((state) => state.order);

  /*Paginado */

  const [currentPage, setCurrentPage] = useState(1);
  const characterPerPage = 8;
  const indexOfLastDog = currentPage * characterPerPage;
  const indexOfFirstDog = indexOfLastDog - characterPerPage;
  const currentDogs = dogs.slice(indexOfFirstDog, indexOfLastDog);

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <Paginado
        characterPerPage={characterPerPage}
        dogs={dogs.length}
        paginado={paginado}
      />
      <div>
        <Cards dogs={currentDogs} />
      </div>
    </div>
  );
};

export default Home;
