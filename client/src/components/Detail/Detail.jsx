import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import style from "./Detail.module.css";

const Detail = () => {
  const { id } = useParams();
  const [countryDetail, setCountryDetail] = useState([]);

  useEffect(() => {
    axios(`http://localhost:3001/countries/${id}`).then(({ data }) => {
      data.name ? setCountryDetail(data) : window.alert("No Country Found");
    });
  }, [id]);

  const {
    name,
    img,
    continent,
    capital,
    subregion,
    area,
    population,
    Activities,
  } = countryDetail;

  const formattedArea = Number(area).toLocaleString("es-ES");
  const formattedPopulation = Number(population).toLocaleString("es-ES");

  let activityTitleShown = false;

  return (
    <div>
      <div className={style.navegacion}>
        <img src={img && img} alt="" />
        <h1>{name && name}</h1>
        <Link to={"/home"}>
          <button>Go Back</button>
        </Link>
      </div>
      <div className={style.contenedor}>
        <div className={style.izquierda}>
          <h3>Continent | {continent && continent} </h3>
          <h3>Capital | {capital && capital} </h3>
          <h3>SubRegion | {subregion && subregion} </h3>
          <h3 className={style.number}>Area | {area && formattedArea} </h3>
          <h3>Population | {population && formattedPopulation} </h3>
          <h3>
            
            {Activities &&
              Activities.map((a) => (
                <div key={a.id}>
                  {/* Mostramos el título solo si no se ha mostrado antes */}
                  {!activityTitleShown && <h2>Activity</h2>}
                  {activityTitleShown = true}
                  <h6>
                    Name: <b className={style.name}>{a.name} </b> | Duration: {a.duration}{" "}
                  </h6>
                  <h6>
                    Difficulty: {a.difficulty} | Season: {a.season}{" "}
                  </h6>
                </div>
              ))}{" "}
          </h3>
        </div>
        <div className={style.derecha}>
          <img src={img && img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Detail;
