import React, {useState, useRef} from 'react'; 
import styles from './Account.module.css'; 

import {useAuth} from '../contexts/AuthContext'; 
import {useHistory} from "react-router-dom";
import firebase from "../firebase"; 



export default function Account() {

  const [error, setError] = useState(''); 
  const {currentUser, logout} = useAuth(); 
  const history = useHistory(); 


  async function handleLogout(){ 
    setError(''); 
    try{ 
      await logout(); 
      history.push('/loginandsignup'); 
    }
    catch { 
      setError('Failed to log out')
    }


  }



  return (
    <div>
        {JSON.stringify(currentUser)} 
        <h2 className = {styles.header_text}> {currentUser.displayName} </h2> 
        {error && <p style = {{fontWeight: 'bold', color: '#cc0000', textAlign: 'center', padding: 0, margin: '20px 0 0 20px'}}> {error} </p>}
        <strong> E-mail: </strong> {currentUser.email} 
      
        <form onSubmit = {handleLogout}  className = {styles.form}>
          <div className = {styles.signup_button_div}> 
            <input className = {styles.signup_button} type="submit" value = "Log Out" id="updateprofile" name="updateprofile"/> <br/>
          </div>
        </form>
       
    </div>
  )
}
