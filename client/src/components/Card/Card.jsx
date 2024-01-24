import style from "./Card.module.css";

const Card = ({ image, name, temperament, weight }) => {
  return (
    <div className={style.cardContainer}>
      <span className={style.name}>{name}</span>
      <div className={style.card}>
        <div className={style.imageContainer}>
          <img src={image} alt={name} />
        </div>
      </div>
      <div>
        <span className={style.descrip}>{temperament}</span>
        <span className={style.descrip}>{weight}</span>
      </div>
    </div>
  );
};

export default Card;
