import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Navigation = ({ match }: { match: boolean }) => {
  
  return (
    <ul className={`${styles.list} ${match ? styles.active : ""}`}>
      <NavLink to="/" end>
        Início
      </NavLink>
      <NavLink to="series">Séries</NavLink>
      <NavLink to="filmes">Filmes</NavLink>
      <NavLink to="trending">Trending</NavLink>
      <NavLink to="list">Minha Lista</NavLink>
    </ul>
  );
};
export default Navigation;
