import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../Context/AuthContext";
import MyContext from "../Context/MyContext";

const PrivateRoute = ({ element }) => {
  const { authenticate } = useContext(AuthContext);
  const { setLogin } = useContext(MyContext);

  if (!authenticate) {
    setLogin(true);
    return <Navigate to="/" />;
  }

  return element;
};

export default PrivateRoute;
