// import React from "react";
import style from "./Pagination.module.css";
import PropTypes from "prop-types";

const Pagination = ({ countriesPerPage, countries, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 0; i < Math.ceil(countries / countriesPerPage); i++) {
    pageNumbers.push(i + 1);
  }

  return (
    <nav className={style.nav}>
      <ul className={style.ul}>
        {pageNumbers?.map((number) => (
          <li key={number}>
            <p
              className={number === currentPage ? style.activePage : style.p}
              onClick={() => paginate(number)}
            >
              {number}
            </p>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  countriesPerPage: PropTypes.number.isRequired,
  countries: PropTypes.array.isRequired,
  paginate: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default Pagination;
