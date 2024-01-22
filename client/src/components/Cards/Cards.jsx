import Card from "../Card/Card";
import { NavLink } from "react-router-dom";
import style from "./Cards.module.css";

const Cards = ({ dogs }) => {
  return (
    <div className={style.cards}>
      {dogs.map((dog) => (
        <NavLink className={style.cardsNav} to={`/detail/${dog.id}`}>
          <Card
            key={dog.id}
            id={dog.id}
            name={dog.name}
            image={dog.image}
            temperament={dog.temperament}
            weight={dog.weight}
          />
        </NavLink>
      ))}
    </div>
  );
};

export default Cards;
