import { useDispatch } from "react-redux";
import { useState } from "react";
import { getDogsByName } from "../../redux/actions";
import style from "./SearchBar.module.css";

const SearchBar = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");

  const handlerChange = (event) => {
    setName(event.target.value);
  };

  const searchDog = () => {
    if (name) {
      dispatch(getDogsByName(name));
      setName("");
    }
  };
  return (
    <div className={style.searchBarContainer}>
      <input
        className={style.input}
        type="search"
        value={name}
        onChange={handlerChange}
        placeholder="Nombre de la raza"
      />
      <button className={style.button} onClick={searchDog}>
        buscar
      </button>
    </div>
  );
};

export default SearchBar;
