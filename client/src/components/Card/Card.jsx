import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import style from "./Card.module.css";

const Card = ({ id, name, img, continent }) => {
  return (
    <div className={style.contenedor}>
      <img src={img} alt={`Flag from ${name}`} />
      <div className={style.inferior}>
        <Link to={`/detail/${id}`}>
          <h4>{name}</h4>
        </Link>
        <h5> {continent}</h5>
      </div>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  continent: PropTypes.string.isRequired,
};
export default Card;
