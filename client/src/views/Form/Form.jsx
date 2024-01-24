import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createDog } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import style from "./Form.module.css";

const Form = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    image: "",
    height_min: "",
    height_max: "",
    weight_min: "",
    weight_max: "",
    life_span: "",
    temperaments: [],
  });

  const [errors, setErrors] = useState({
    name: "",
    image: "",
    height_min: "",
    height_max: "",
    weight_min: "",
    weight_max: "",
    life_span: "",
    temperaments: [],
  });

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setForm({
      ...form,
      [property]: value,
    });
  };

  const temperaments = useSelector((state) => state.temperaments);

  const handleSelect = (event) => {
    const selectedTemperament = event.target.value;
    if (form.temperaments.includes(selectedTemperament)) {
      setForm({
        ...form,
        temperaments: form.temperaments.filter(
          (temp) => temp !== selectedTemperament
        ),
      });
    } else {
      setForm({
        ...form,
        temperaments: [...form.temperaments, selectedTemperament],
      });
    }
  };

  const tempSelected = (temp) => {
    return form.temperaments.includes(temp.name);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const formFinal = {
      name: form.name,
      image: form.image,
      height: `${form.height_min} - ${form.height_max} cm`,
      weight: `${form.weight_min} - ${form.weight_max} kg`,
      life_span: form.life_span,
      temperaments: form.temperaments,
    };
    dispatch(createDog(formFinal));
    alert("Driver created successfully");
    setForm({
      name: "",
      image: "",
      height_min: "",
      height_max: "",
      weight_min: "",
      weight_max: "",
      life_span: "",
      temperaments: [],
    });
  };

  const handleToHome = () => {
    navigate("/home");
  };

  return (
    <div className={style.formContainer}>
      <div className={style.form}>
        <form>
          <h1 className={style.titleform}>Crear Perro</h1>
          <div>
            <label className={style.labelProperties}>Nombre: </label>
            <input
              className={style.inputsform}
              type="text"
              value={form.name}
              name="name"
              placeholder="Dalmata"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className={style.labelProperties}>Imagen: </label>
            <input
              className={style.inputsform}
              type="text"
              value={form.image}
              name="image"
              placeholder="Inserta la url de la imagen"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className={style.labelProperties}>Altura: </label>
            <input
              className={style.inputsform}
              type="text"
              value={form.height_min}
              name="height_min"
              placeholder="min"
              onChange={handleChange}
            />
            <input
              className={style.inputsform}
              type="text"
              value={form.height_max}
              name="height_max"
              placeholder="max"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className={style.labelProperties}>Peso: </label>
            <input
              className={style.inputsform}
              type="text"
              value={form.weight_min}
              name="weight_min"
              placeholder="min"
              onChange={handleChange}
            />
            <input
              className={style.inputsform}
              type="text"
              value={form.weight_max}
              name="weight_max"
              placeholder="max"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className={style.labelProperties}>Años de vida: </label>
            <input
              className={style.inputsform}
              type="text"
              value={form.life_span}
              name="life_span"
              placeholder="Ej: 10 - 12 años"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className={style.labelProperties}>Temperamento: </label>
            <div className={style.checksContainer}>
              {temperaments.map((temp) => (
                <div className={style.checkbox} key={temp.id}>
                  <label className={style.labelCheck}>
                    <input
                      type="checkbox"
                      value={temp.name}
                      checked={tempSelected(temp)}
                      onChange={handleSelect}
                    ></input>
                    {temp.name}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <button className={style.buttonform} onClick={submitHandler}>
            Crear
          </button>
          <button className={style.buttonVolver} onClick={handleToHome}>
            Volver
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
