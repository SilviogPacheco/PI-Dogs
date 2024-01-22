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
    height: "",
    weight: "",
    life_span: "",
    temperaments: [],
  });

  const [errors, setErrors] = useState({
    name: "",
    image: "",
    height: "",
    weight: "",
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
    console.log(event.target.value);

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

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(createDog(form));
    alert("Driver created successfully");
    setForm({
      name: "",
      image: "",
      height: "",
      weight: "",
      life_span: "",
      temperaments: [],
    });
  };

  return (
    <div className={style.formContainer}>
      <form>
        <h1>Crear Perro</h1>
        <div>
          <label htmlFor="">Nombre: </label>
          <input
            type="text"
            value={form.name}
            name="name"
            placeholder="Dalmata"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="">Imagen: </label>
          <input
            type="text"
            value={form.image}
            name="image"
            placeholder="Inserta la url de la imagen"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="">Altura: </label>
          <input
            type="text"
            value={form.height}
            name="height"
            placeholder="Ej: 2 - 4 mts"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="">Peso: </label>
          <input
            type="text"
            value={form.weight}
            name="weight"
            placeholder="Ej: 8 - 12 kg"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="">Años de vida: </label>
          <input
            type="text"
            value={form.life_span}
            name="life_span"
            placeholder="Ej: 10 - 12 años"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="">Temperamento: </label>
          <div className={style.checksContainer}>
            {temperaments.map((temp) => (
              <div className={style.checkbox} key={temp.id}>
                <label>
                  <input
                    type="checkbox"
                    value={temp.name}
                    onChange={handleSelect}
                  ></input>
                  {temp.name}
                </label>
              </div>
            ))}
          </div>
        </div>
        <button onClick={submitHandler}>Crear</button>
      </form>
    </div>
  );
};

export default Form;
