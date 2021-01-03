import React from 'react'; 
import MaterialTable from '../MaterialTable';
import './Matches.css'; 
function Matches() { 
  return (<div class = "outer">

    <h3> Match List </h3>   
    <div id = "table"> 
      <MaterialTable />
    </div> 
     </div>);

}

export default Matches; 