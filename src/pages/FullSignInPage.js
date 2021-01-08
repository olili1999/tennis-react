import React, {useState} from 'react'; 
import SignUp from './SignUp'; 
import Login from './Login'; 



export default function FullSignInPage(props) {
  const [showSignUp, setshowSignUp] = useState(false);
  
    function handleChange(){
      setshowSignUp(!showSignUp); 
    }

    if (showSignUp) {
      return <SignUp handleChange = {handleChange} />;
    }
    return <Login handleChange = {handleChange}/>;
  };