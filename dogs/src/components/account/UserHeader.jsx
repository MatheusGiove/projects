import React from "react";
import UserNavigation from "./UserNavigation";
import styles from "./UserHeader.module.css";
import { useLocation } from "react-router-dom";

const AccountHeader = () => {
  const [title, setTitle] = React.useState("");
  const location = useLocation();

  React.useEffect(() => {
    const { pathname } = location;
    switch (pathname) {
      case "/account/post":
        setTitle("Poste sua foto");
        break;
      case "/account/stats":
        setTitle("Estatísticas");
        break;
      case "/account":
        setTitle("Minha Conta");
        break;
      default:
        setTitle("Minha Conta");
        break;
    }
  }, [location]);

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserNavigation />
    </header>
  );
};

export default AccountHeader;
