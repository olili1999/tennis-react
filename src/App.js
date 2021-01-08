
import logo from './logo.svg';
import './App.css';
import Nav from "./Nav" 
import Card from "./Card"
import Tournaments from './pages/Tournaments'; 
import Players from './pages/Players'; 
import Login from './pages/Login'; 
import Matches from './pages/Matches'; 
import SignUp from './pages/SignUp'; 
import Profile from './pages/Profile'; 

import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'; 
import Home from './pages/Home';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import FullSignInPage from './pages/FullSignInPage';

function App() {
  return (
    
    <Router> 
      <ThemeProvider theme={theme}>

      <Nav></Nav>
      <div className="App">
          <Switch> 
            <Route exact path = "/"> <Home/>   </Route> 
            <Route path = "/Players" > <Players/>  </Route> 
            <Route path = "/Tournaments"> <Tournaments/> </Route> 
            <Route path = "/SignUp"> <FullSignInPage/>  </Route> 
            <Route path = "/Login"> <Login/>  </Route> 
            <Route path = "/Matches"> <Matches/>  </Route>
            <Route path = "/Profile"> <Profile/>  </Route>  
          </Switch>


      </div>
      </ThemeProvider>
    </Router>

  );
}
const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Rubik', 
      'sans-serif'
    ].join(','),
  }
});


export default App;
