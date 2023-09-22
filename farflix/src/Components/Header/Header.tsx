import { useState, useRef, useEffect, useCallback } from "react";
import styles from "./Header.module.css";
import { NavLink, Link } from "react-router-dom";
import logo from "../../Assets/logo.svg";
import profileImage from "../../Assets/img/profileImage.png";
import search from "../../Assets/icons/search.svg";
import notification from "../../Assets/icons/notification.svg";
import arrow from "../../Assets/icons/arrow.svg";
import useMedia from "../../Hooks/useMedia";
import Navigation from "./Navigation";

const Header = () => {
  const media = useMedia("(max-width: 920px)");
  const [match, setMatch] = useState(media);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLUListElement | null>(null);
  const [button, setButton] = useState(false);

  const toggleMenu = useCallback(() => {
    setButton((button) => !button);
    setMatch((match) => !match);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node) &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setMatch(false);
        setButton(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <img src={logo} alt="Logo" />
      </Link>
      <nav className={styles.nav}>
        {media ? (
          <>
            <button
              ref={buttonRef}
              onClick={toggleMenu}
              className={`${styles.menuButton} ${button ? styles.active : ""}`}
            >
              Navegar
            </button>
            <ul
              ref={menuRef}
              className={`${styles.list} ${match ? styles.active : ""}`}
            >
              <NavLink to="/" end>
                Início
              </NavLink>
              <NavLink to="series">Séries</NavLink>
              <NavLink to="filmes">Filmes</NavLink>
              <NavLink to="trending">Trending</NavLink>
              <NavLink to="list">Minha Lista</NavLink>
            </ul>
          </>
        ) : (
          <Navigation match={true} />
        )}
      </nav>
      <div className={styles.profile}>
        <button className={styles.searchIcon}>
          <img src={search} alt="Search Icon" />
        </button>
        <Link style={{ color: "#e4e4e4" }} to="/">
          Infantil
        </Link>
        <button className={styles.notificationIcon}>
          <img src={notification} alt="Notification Icon" />
        </button>
        <div className={styles.secundaryNavigation}>
          <Link to="profile">
            <img
              className={styles.profileImage}
              src={profileImage}
              alt="Profile Image"
            />
          </Link>
          <span>
            <img className={styles.detail} src={arrow} alt="Detail Icon" />
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
