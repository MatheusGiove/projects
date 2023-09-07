import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { ReactComponent as Dogs } from "../assets/dogs.svg";
import { UserContext } from "../UserContext";

const Header = () => {
  const { data } = React.useContext(UserContext);
  return (
    <header className={styles.header}>
      <nav className="container">
        <ul className={styles.nav}>
          <li>
            <Link to="/" className={styles.logo} aria-label="Dogs - Home">
              <Dogs />
            </Link>
          </li>
          <li>
            {data ? (
              <Link to="/account" className={styles.login}>
                {data.username}
              </Link>
            ) : (
              <Link to="/login" className={styles.login}>
                Login / Criar
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
