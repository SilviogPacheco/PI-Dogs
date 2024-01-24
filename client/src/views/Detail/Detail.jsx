import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDogById } from "../../redux/actions";
import style from "./Detail.module.css";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const dogDetail = useSelector((state) => state.dogById);

  useEffect(() => {
    dispatch(getDogById(id));
  }, [dispatch, id]);

  return (
    <div className={style.detailContainer}>
      {dogDetail.map((elem) => (
        <div key={elem.id} className={style.cardDetail}>
          <div className={style.imageDetail}>
            <img src={elem.image} alt={elem.name} />
          </div>
          <div className={style.detailDetail}>
            <span className={style.id}>ID: {elem.id}</span>
            <span className={style.nameDetail}>{elem.name}</span>
            <span className={style.temperamentDetail}>
              TEMPERAMENTO: {elem.temperament}
            </span>
            <span className={style.temperamentDetail}>
              ALTURA: {elem.height}
            </span>
            <span className={style.temperamentDetail}>PESO: {elem.weight}</span>
            <span className={style.temperamentDetail}>
              AÑOS DE VIDA: {elem.life_span}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Detail;
