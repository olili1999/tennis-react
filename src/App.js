
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
import Account from './pages/Account'
import {BrowserRouter as Router, Route, Switch, Link, HashRouter} from 'react-router-dom'; 
import Home from './pages/Home';
import ForgotPassword from './pages/ForgotPassword';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { AuthProvider } from "./contexts/AuthContext"

import PrivateRoute from "./PrivateRoute"
import UpdateProfile from "./pages/UpdateProfile"
function App() {
  return (
    
    <HashRouter> 
      <ThemeProvider theme={theme}>
      <AuthProvider> 

      <Nav></Nav>
        <div className="App">
            <Switch>
              
              <PrivateRoute exact path = "/"> <Home/>   </PrivateRoute> 
              <Route exact path = "/signup"> <SignUp/>   </Route> 
              <Route exact path = "/login"> <Login/>   </Route> 
              <Route exact path = "/forgotpassword"> <ForgotPassword/>   </Route> 
              <PrivateRoute component = {Account} exact path = "/account"/>  
              <Route path = "/players" > <Players/>  </Route> 
              <Route path = "/tournaments"> <Tournaments/> </Route> 
              <Route path = "/matches"> <Matches/>  </Route>
              <Route path = "/profile"> <Profile/>  </Route>  
            </Switch>


        </div>
      </AuthProvider> 

      </ThemeProvider>
    </HashRouter>

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
