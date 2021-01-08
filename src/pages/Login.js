import React from 'react'; 
import styles from './Login.module.css'

function Login(props) { 
  return (
    <> 
      <div className = {styles.justifycenter}> 
        <div className = {styles.card}> 
          <div className = {styles.row_one}>
            <button className = {styles.btn_login}> Login </button>
            <button onClick = {props.handleChange} className = {styles.btn_signup}> Sign Up </button> 
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
      
            <div className = {styles.login_button_div}> 
              <input className = {styles.login_button} type="button" value = "Login" id="login" name="login"/> <br/>
            </div>
            <div className = {styles.forgot_password_div}> 
              <p style = {{color: '#206a5d', fontWeight: 'bold'}}> Forgot password? </p>  
            </div>
          </form>
        

        </div> 
      </div>
      {console.log(props.showSignUp)}
  </> 

  
  
  );
}

export default Login; 