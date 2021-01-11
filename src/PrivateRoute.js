import React from "react"
import { Route, Redirect } from "react-router-dom"
import { useAuth } from "./contexts/AuthContext"

export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth(); 
  const isAuth = localStorage.getItem('isLoggedIn');
  return (
    <Route
      {...rest}
      render={props => {
        return (currentUser || isAuth) ? <Component {...props}> </Component> : <Redirect to="/login" />
      }}
    ></Route>
  )
}