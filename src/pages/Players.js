import React from 'react'; 
import Card from "../Card";
import MaterialTable from "../MaterialTable";
import "./Players.modules.css"
function Players() { 
  return (<div>    <h3> Recommended Players Near You </h3> 
    <div class = "cardContainer"> 
      <Card> 
      </Card>
      <Card> 
      </Card>
      <Card> 
      </Card>
    </div> 
    <h3> Player Database Sorted by Rank </h3> 

    <div id = "table"> 
        <MaterialTable />
    </div> 
    </div>);
}

export default Players; 