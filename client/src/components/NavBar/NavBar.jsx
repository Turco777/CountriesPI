//import React from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar.jsx";
import style from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={style.nav}>
      <SearchBar />
      <NavLink className={style.button} to={"/form"}>
        Create Activity
      </NavLink>
      <NavLink className={style.button} to={"/"}>
        Go Landing
      </NavLink>
    </nav>
  );
};

export default NavBar;
