import React, { useState } from "react";
import './Nav.modules.css'
import { useHistory } from 'react-router-dom'; 
import Tournaments from './pages/Tournaments'; 
import Players from './pages/Players'; 
import Login from './pages/Login'; 
import SignUp from './pages/SignUp'; 
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'; 
import {NavLink} from 'react-router-dom'; 

function NavComponent(){ 
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
                <Link to = "/Players"> Players</Link>
              </li> 
              <li className = "hvr-rectangle-out">
                <Link to = "/Matches"> Match Results </Link></li>
              <li className = "hvr-rectangle-out"> 
                <Link to = "/Tournaments"> Tournaments</Link></li>
    
              <li className = "hvr-rectangle-out">
              <Link to = "/Profile"> Profile </Link></li>
              <li className = "hvr-rectangle-out">
                <Link to = "/SignUp"> SIGN IN / UP </Link></li>
       
              
            </ul> 
          </div>
      </div> 
  );

}

export default NavComponent;