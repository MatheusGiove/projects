import React from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";

const NotFound = () => {
  const { userLogout } = React.useContext(UserContext)
  const navigate = useNavigate();
  React.useEffect(() => {
    userLogout()
    setTimeout(() => {
      navigate("/login");
    }, 5000);
  }, [navigate, userLogout]);
  return (
    <section className="container mainContainer">
      <h1 className="title">Erro: 404</h1>
      <p>Página não encontrada.</p>
      <p>Você será redirecionado para a tela de Login</p>
    </section>
  );
};

export default NotFound;
