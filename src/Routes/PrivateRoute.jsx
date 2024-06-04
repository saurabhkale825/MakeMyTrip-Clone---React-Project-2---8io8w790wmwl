import React, { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import AuthContext from "../Context/AuthContext";
import MyContext from "../Context/MyContext";

const PrivateRoute = ({ element: Component, ...rest }) => {
  const { authenticate } = useContext(AuthContext);
  const { setLogin } = useContext(MyContext);

  if (!authenticate) {
    setLogin(true);
    return <Navigate to="/" />;
  }

  return <Route {...rest} element={Component} />;
};

export default PrivateRoute;
