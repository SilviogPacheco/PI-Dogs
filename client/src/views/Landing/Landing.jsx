import { useNavigate } from "react-router-dom";
import landingImagen from "../Landing/pngwing.com.png";
import huellita from "../Landing/pawprint_9174277.png";
import style from "./Landing.module.css";

const Landing = () => {
  const navigate = useNavigate();

  const handleToHome = () => {
    navigate("/home");
  };

  return (
    <div className={style.landingContainer}>
      <div>
        <h1 className={style.title}>Mundo Perruno</h1>
      </div>
      <div className={style.perrito}>
        <img className={style.imgPerrito} src={landingImagen} alt="perrito" />
      </div>
      <div className={style.buttonContainer}>
        <img className={style.huellas} src={huellita} alt="huellitas" />
        <button className={style.button} onClick={handleToHome}>
          Ingresar
        </button>
        <img className={style.huellas} src={huellita} alt="huellitas" />
      </div>
    </div>
  );
};

export default Landing;
