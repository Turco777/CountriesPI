import Card from "../Card/Card.jsx";
import PropTypes from "prop-types";
import style from "./Cards.module.css";

const Cards = ({ countries }) => {
  return (
    <div className={style.contenedor}>
      {countries &&
        countries.map(({ id, name, img, continent }) => {
          if (!img) {
            // Si no está definida, puedes mostrar un mensaje de error o simplemente omitir este elemento.
            console.error(`La imagen para el país ${name} no está definida.`);
            return null;
          }
          return (
            <Card
              key={id}
              id={id}
              name={name}
              img={img}
              continent={continent}
            />
          );
        })}
    </div>
  );
};

Cards.propTypes = {
  countries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      continent: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Cards;
