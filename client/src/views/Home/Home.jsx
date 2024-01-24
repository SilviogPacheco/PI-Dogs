import Cards from "../../components/Cards/Cards";
import Paginado from "../../components/Paginado/Paginado";
import { useState } from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const dogs = useSelector((state) => state.searchDogs);

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
