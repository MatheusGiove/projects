import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { ReactComponent as MinhasFotos } from "../../assets/feed.svg";
import { ReactComponent as Estatisticas } from "../../assets/estatisticas.svg";
import { ReactComponent as AdicionarFoto } from "../../assets/adicionar.svg";
import { ReactComponent as Sair } from "../../assets/sair.svg";
import styles from "./UserNavigation.module.css";
import useMedia from "../../hooks/useMedia";
import { UserContext } from "../../UserContext";

const UserNavigation = () => {
  const mobile = useMedia("(max-width: 760px)");
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const navigate = useNavigate();
  const { userLogout } = React.useContext(UserContext);
  
  const { pathname } = useLocation();
  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname])

  function logout() {
    userLogout();
    navigate("/login");
  }

  return (
    <>
      {mobile && (
        <button
          className={`${styles.mobileButton} ${
            mobileMenu ? styles.mobileButtonActive : ""
          }`}
          aria-label="Menu"
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}
      <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu ? styles.navMobileActive : ""}`}>
        <NavLink to="/account" end>
          <MinhasFotos />
          {mobile && "Minhas Fotos"}
        </NavLink>
        <NavLink to="/account/stats">
          <Estatisticas />
          {mobile && "Estatísticas"}
        </NavLink>
        <NavLink to="/account/post">
          <AdicionarFoto />
          {mobile && "Adicionar Foto"}
        </NavLink>
        <button onClick={logout}>
          <Sair />
          {mobile && "Sair"}
        </button>
      </nav>
    </>
  );
};

export default UserNavigation;
