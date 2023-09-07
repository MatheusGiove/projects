import React from "react";
import { UserContext } from "../../UserContext";
import { Navigate } from "react-router-dom";
import Loading from "./Loading";

const ProtectedRouter = ({ children }) => {
  const { login } = React.useContext(UserContext);
  if (login === true) {
    return children;
  } else if (login === false) {
    return <Navigate to="/login" />;
  } else {
    return <Loading />
  }
};

export default ProtectedRouter;
