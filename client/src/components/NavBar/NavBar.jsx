import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { filter, order } from "../../redux/actions";
import style from "./NavBar.module.css";

const NavBar = () => {
  const dispatch = useDispatch();
  const temperamentos = useSelector((state) => state.temperaments);

  const [filtros, setFiltros] = useState({
    temperaments: "all",
    origin: "all",
  });

  const [orden, setOrden] = useState("default");

  const handlerFilter = (event) => {
    let property = event.target.name;
    let value = event.target.value;
    setFiltros({ ...filtros, [property]: value });
  };

  useEffect(() => {
    dispatch(filter({ temp: filtros.temperaments, origin: filtros.origin }));
    setOrden("default");
  }, [dispatch, filtros]);

  const handlerOrder = (event) => {
    setOrden(event.target.value);
    dispatch(order(event.target.value));
  };

  return (
    <div className={style.navBarContainer}>
      <SearchBar />
      <div className={style.divFiltros}>
        <span>Temperamentos:</span>
        <select
          className={style.temperaments}
          name="temperaments"
          onChange={handlerFilter}
        >
          <option value="all"> All </option>
          {temperamentos.map((temp) => (
            <option key={temp.id} value={temp.name}>
              {temp.name}
            </option>
          ))}
        </select>
      </div>
      <div className={style.divFiltros}>
        <span>Origen:</span>
        <select name="origin" onChange={handlerFilter}>
          <option value="all">All</option>
          <option value="api">Api</option>
          <option value="createInBd">Data base</option>
        </select>
      </div>
      <div className={style.divFiltros}>
        <span>Orden:</span>
        <select onChange={handlerOrder}>
          <option value="default" selected={orden === "default"}>
            Default
          </option>
          <option value="asc">Asc (A-Z)</option>
          <option value="desc">Desc (Z-A)</option>
          <option value="pme">Peso menor</option>
          <option value="pma">Peso mayor</option>
        </select>
      </div>
      <div className={style.buttonCrearContainer}>
        <NavLink className={style.buttonCrear} to="/form">
          <span>Crear</span>
        </NavLink>
      </div>
      <div className={style.buttonsContainer}>
        <NavLink className={style.buttons} to="/home">
          <span>Home</span>
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
