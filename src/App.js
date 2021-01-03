
import logo from './logo.svg';
import './App.css';
import Nav from "./Nav" 
import Card from "./Card"
import Tournaments from './pages/Tournaments'; 
import Players from './pages/Players'; 
import Login from './pages/Login'; 
import SignUp from './pages/SignUp'; 
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'; 
import Home from './pages/Home';


function App() {
  return (
    <Router> 
      <Nav></Nav>
      <div className="App">
          <Switch> 
            <Route exact path = "/"> <Home/>   </Route> 
            <Route path = "/Players" > <Players/>  </Route> 
            <Route path = "/Tournaments"> <Tournaments/> </Route> 
            <Route path = "/SignUp"> <SignUp/>  </Route> 
            <Route path = "/Login"> <Login/>  </Route> 
          </Switch>


      </div>
    </Router>

  );
}



export default App;
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_filter_table
// https://ianlunn.github.io/Hover/
// https://colorhunt.co/palette/196180
// https://getcssscan.com/css-box-shadow-examples