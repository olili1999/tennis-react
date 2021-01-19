import React, { useEffect, useContext, useState } from "react";
import "./Nav.modules.css";
import { useHistory } from "react-router-dom";
import Tournaments from "./pages/Tournaments";
import Players from "./pages/Players";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";
import { LoggedContext } from "./contexts/LoggedContext";

import { db } from "./firebase";

function NavComponent() {
  const { logged, setLogged } = useContext(LoggedContext);
  const [isLogged, setIsLogged] = useState(
    JSON.parse(localStorage.getItem("isLoggedIn"))
  );
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("currentUser"))
  );
  const [currentUserName, setCurrentUserName] = useState("");
  useEffect(() => {
    if (currentUser !== null) {
      db.collection("users")
        .doc(currentUser["uid"])
        .get()
        .then((documentSnapshot) => {
          setCurrentUserName(documentSnapshot.data().username);
        });
    }
  });

  return (
    <div className="nav-bar">
      <ul className="left">
        <li>
          <a href="" className="logo-place">
            Tennis with Friends{" "}
          </a>
        </li>
      </ul>
      <ul className="right">
        <li className="hvr-rectangle-out">
          <Link to="/">Home</Link>
        </li>
        <li className="hvr-rectangle-out">
          <Link to="/players"> Players</Link>
        </li>
        <li className="hvr-rectangle-out">
          <Link to="/matches"> Match Results </Link>
        </li>
        <li className="hvr-rectangle-out">
          <Link to="/tournaments"> Tournaments</Link>
        </li>

        {logged || isLogged ? (
          <li className="hvr-rectangle-out">
            {/*  */}
            <Link to={`/profile/${currentUserName}`}> Profile </Link>
          </li>
        ) : (
          ""
        )}
        {logged || isLogged ? (
          <li className="hvr-rectangle-out">
            <Link to="/account"> Account </Link>
          </li>
        ) : (
          ""
        )}
        {logged || isLogged ? (
          ""
        ) : (
          <li className="hvr-rectangle-out">
            <Link to="/login"> Login </Link>
          </li>
        )}

        {logged || isLogged ? (
          ""
        ) : (
          <li className="hvr-rectangle-out">
            <Link to="/signup"> Sign Up </Link>
          </li>
        )}
      </ul>
    </div>
  );
}

export default NavComponent;
