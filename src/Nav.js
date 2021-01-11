import React, { useState } from "react";
import './Nav.modules.css'
import { useHistory } from 'react-router-dom'; 
import Tournaments from './pages/Tournaments'; 
import Players from './pages/Players'; 
import Login from './pages/Login'; 
import SignUp from './pages/SignUp'; 
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'; 
import {NavLink} from 'react-router-dom'; 
import {useAuth} from './contexts/AuthContext';

function NavComponent(){ 

  const {currentUser} = useAuth(); 

  return (
      <div class = "outer">
          <div className="nav-bar">
            <ul className = "left"> 
              <li><a href="" className= "logo-place">Tennis with Friends </a></li>
            </ul> 
            <ul className = "right">
              <li className = "hvr-rectangle-out">
                <Link to = "/">Home</Link> 
              </li>
              <li className = "hvr-rectangle-out">
                <Link to = "/players"> Players</Link>
              </li> 
              <li className = "hvr-rectangle-out">
                <Link to = "/matches"> Match Results </Link></li>
              <li className = "hvr-rectangle-out"> 
                <Link to = "/tournaments"> Tournaments</Link></li>
              <li className = "hvr-rectangle-out">
              <Link to = "/profile"> Profile </Link></li>
              <li className = "hvr-rectangle-out">
                <Link to = "/login"> Login </Link></li>
              {/* {currentUser ? "": (<li className = "hvr-rectangle-out">
                <Link to = "/login"> Login </Link></li>)} */}
                
                <li className = "hvr-rectangle-out">
                <Link to = "/signup"> SIGN UP </Link></li>
                
              
            </ul> 
          </div>
      </div> 
  );

}

export default NavComponent;