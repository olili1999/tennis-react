import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";
import { LoggedContext } from "./contexts/LoggedContext";
export default function PrivateRoute({ component: Component, ...rest }) {
  const { logged } = useContext(LoggedContext);
  const { currentUser } = useAuth();
  // const isAuth = localStorage.getItem("isLoggedIn");
  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser || logged ? (
          <Component {...props}> </Component>
        ) : (
          <Redirect to="/login" />
        );
      }}
    ></Route>
  );
}
