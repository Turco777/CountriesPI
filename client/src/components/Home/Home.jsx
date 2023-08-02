import Cards from "../Cards/Cards.jsx";
import style from "./Home.module.css";
import NavBar from "../NavBar/NavBar.jsx";
import Filters from "../Filters/Filters.jsx";
import Pagination from "../Pagination/Pagination.jsx";
import PropTypes from "prop-types";
import { useState } from "react";

const Home = ({ countries }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage = 10;
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = countries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className={style.home}>
      <NavBar />
      <Filters setCurrentPage={setCurrentPage} />
      <Cards countries={currentCountries} />
      <div className={style.paginatecontainer}>
      <Pagination
        countriesPerPage={countriesPerPage}
        countries={countries.length}
        paginate={paginate}
        currentPage={currentPage}
      />
      </div>
    </div>
  );
};

Home.propTypes = {
  countries: PropTypes.array.isRequired,
};

export default Home;
