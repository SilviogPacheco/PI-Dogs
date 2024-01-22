import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDogById } from "../../redux/actions";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const dogDetail = useSelector((state) => state.dogById);

  useEffect(() => {
    dispatch(getDogById(id));
  }, [dispatch, id]);
  return (
    <div>
      {dogDetail.map((elem) => (
        <div key={elem.id}>
          <span>{elem.name}</span>
          <span>{elem.temperament}</span>
          <img src={elem.image.url} />
        </div>
      ))}
    </div>
  );
};

export default Detail;
