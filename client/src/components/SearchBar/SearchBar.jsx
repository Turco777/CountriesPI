// import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getCountryByName } from "../../redux/actions.js";
import style from "./SearchBar.module.css";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [countrySearch, setCountrySearch] = useState("");

  const handleChange = (event) => {
    setCountrySearch(event.target.value);
  };

  const handleSearch = () => {
    dispatch(getCountryByName(countrySearch));
  };

  return (
    <div>
      <input
        className={style.input}
        name="search"
        type="search"
        placeholder=" countries..."
        onChange={handleChange}
      />
      <button className={style.searchButton} onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
