import React from 'react'; 
import Card from "../Card";
import ScoreTable from "../ScoreTable";

import MaterialTable from "../MaterialTable";
import styles from "./Profile.module.css"
function Profile() { 
  return (<div>    
    <h3> Match History </h3> 
      <h3 style = {{display: 'flex', justifyContent: 'center'}}> Total Wins: 3, Total Losses: 0 </h3> 
      <div className = {styles.dummy_table}> 
        <ScoreTable></ScoreTable>
        <ScoreTable></ScoreTable>
        <ScoreTable></ScoreTable>
      </div> 
    </div>);
}

export default Profile; 