import React, { useState } from "react";
import './Card.modules.css'

function CardComponent(){ 

  return(
      <div class = "Card"> 
        <div class = "first-line"> 
            <p class = "header-text"> Oliver Li </p>
            <div class = "image-cropper"> 
              <img src = "./headshotross.jpg" class = "profile-pic"/> 
            </div> 
        </div>
        <div class = "textbox" > 
          <li> 🏅 TwF Rank: #1 </li>
          <li> 🏆 10 Wins, 0 Losses </li>
          <li> 📈 USTA Rating: 5.0 </li>
          <li> <img class = "utr" src = "./utr.png"/> UTR Rating: 10.0 </li>
          <li> 📍 10 Miles Away </li>
        </div> 
        <div class = "button"> 
          <button class = "hvr-rectangle-out-btn"> 
            <a> CONTACT </a>
          </button>
        </div> 

    </div> 
  ); 



}

export default CardComponent; 