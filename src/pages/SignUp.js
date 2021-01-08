import React, {useState} from 'react'; 
import styles from './SignUp.module.css'; 


export default function SignUp(props) { 
  return (
    <>
      <div className = {styles.justifycenter}> 
        <div className = {styles.card}> 
          <div className = {styles.row_one}>
            <button onClick = {props.handleChange} className = {styles.btn_login}> Login </button>
            <button className = {styles.btn_signup}> Sign Up </button> 
          </div>
          <form className = {styles.form}>
            <div className = {styles.text_div}> 
              <label htmlFor="email">E-mail</label><br/>
              <input type="text" id="email" name="email"/> <br/> 
            </div> 
            <div className = {styles.text_div}> 
              <label htmlFor="password">Password</label><br/> 
              <input type="password" id="password" name="password"/><br/>
            </div>
            <div className = {styles.text_div}> 
              <label htmlFor="password">Password Confirmation</label><br/> 
              <input type="password" id="password_confirmation" name="password_confirmation"/><br/>
            </div>  
      
            <div className = {styles.signup_button_div}> 
              <input className = {styles.signup_button} type="button" value = "Sign Up" id="signup" name="signup"/> <br/>
            </div>
            


          </form>
        

        </div> 
      </div>
    </> 
    
    );  
}


// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="/__/firebase/8.2.1/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="/__/firebase/8.2.1/firebase-analytics.js"></script>

// <!-- Initialize Firebase -->
// <script src="/__/firebase/init.js"></script>nz