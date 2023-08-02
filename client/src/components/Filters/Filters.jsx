import PropTypes from "prop-types";
import style from "./Filters.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  filterByContinent,
  orderByName,
  orderByPopulation,
  getCountriesByActivity,
  getCountries,
} from "../../redux/actions.js";

const Filters = ({ setCurrentPage }) => {
  const activities = useSelector((state) => state.activities);
  const dispatch = useDispatch();

  const handleNameOrder = (event) => {
    dispatch(orderByName(event.target.value));
  };

  const handlePopulationOrder = (event) => {
    dispatch(orderByPopulation(event.target.value));
  };

  const handleContinentFilter = (event) => {
    setCurrentPage(1);
    dispatch(filterByContinent(event.target.value));
  };

  const handleActivityFilter = (event) => {
    if (event.target.value !== "0") {
      setCurrentPage(1);
      dispatch(getCountriesByActivity(event.target.value));
    } else {
      setCurrentPage(1);
      dispatch(getCountries());
    }
  };

  const handleResetFilters = () => {
    setCurrentPage(1);
    dispatch(getCountries());
  };

  return (
    <div className={style.filters}>
      <div className={style.orderFilter}>
        <h4>Order by Alphabet</h4>
        <select name="nameOrder" defaultValue="" onChange={handleNameOrder}>
          <option value="" disabled hidden>
            --Select--
          </option>
          <option value="A">A-Z</option>
          <option value="D">Z-A</option>
        </select>
      </div>
      <div className={style.orderFilter}>
        <h4>Order by Population</h4>
        <select
          name="populationOrder"
          defaultValue=""
          onChange={handlePopulationOrder}
        >
          <option value="" disabled hidden>
            --Select--
          </option>
          <option value="A">Ascendent</option>
          <option value="D">Descendent</option>
        </select>
      </div>
      <div className={style.orderFilter}>
        <h4>Filter by Continent</h4>
        <select name="continentFilter" onChange={handleContinentFilter}>
          <option value="" disabled hidden>
            --Select--
          </option>
          <option value="All countries">All countries</option>
          <option value="Africa">Africa</option>
          <option value="Europe">Europe</option>
          <option value="Asia">Asia</option>
          <option value="North America">North America</option>
          <option value="South America">South America</option>
          <option value="Oceania">Oceania</option>
          <option value="Antarctica">Antarctica</option>
        </select>
      </div>
      <div className={style.orderFilter}>
        <h4>Filter by Activity</h4>
        <select name="activityFilter" onChange={handleActivityFilter}>
          <option key="0" value="0">
            All Countries
          </option>
          {activities?.map((activity) => (
            <option key={activity.id} value={activity.id}>
              {activity.name}
            </option>
          ))}
        </select>
      </div>
      <button className={style.resetButton} onClick={handleResetFilters}>
        Reset Filters
      </button>
    </div>
  );
};

Filters.propTypes = {
  setCurrentPage: PropTypes.func.isRequired,
};

export default Filters;
