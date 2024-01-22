import style from "./Paginado.module.css";

const Paginado = ({ characterPerPage, dogs, paginado }) => {
  const pageNumber = [];

  for (let i = 0; i <= Math.ceil(dogs / characterPerPage); i++) {
    pageNumber.push(i + 1);
  }
  return (
    <nav className={style.paginado}>
      <ul>
        {pageNumber &&
          pageNumber.map((number) => (
            <li>
              <a onClick={() => paginado(number)}>{number}</a>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default Paginado;
