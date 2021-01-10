import styles from "./ForgotPassword.module.css"
import React, {useState, useRef} from 'react'; 
import {useAuth} from '../contexts/AuthContext'
import {Link} from 'react-router-dom'; 


export default function ForgotPassword() {



  const emailRef = useRef(); 
  // const {signup, currentUser} = useAuth(); 
  const {resetPassword} = useAuth(); 
  const [error, setError] = useState(''); 
  const [loading, setLoading] = useState(false); 
  const [message, setMessage] = useState(''); 

  async function handleSubmit(e) {
    e.preventDefault(); 

    try{ 
      setError('')
      setLoading(true); 
      // wait for the signup to finish 
      await resetPassword(emailRef.current.value);
      setMessage('Check your inbox for further instructions'); 
    }
    catch { 
      setError('Failed to reset password')
    }
    setLoading(false); 
    
  }

  return (
    <>
      <div className = {styles.justifycenter}> 
        <div className = {styles.card}> 
          <h3> Password Reset </h3> 
          {message && <p style = {{fontWeight: 'bold', color: '#206a5d', textAlign: 'center', padding: 0, margin: '20px 0 0 20px'}}> {message} </p>}
          {error && <p style = {{fontWeight: 'bold', color: '#cc0000', textAlign: 'center', padding: 0, margin: '20px 0 0 20px'}}> {error} </p>}
          <form onSubmit = {handleSubmit}  className = {styles.form}>
            <div className = {styles.text_div}> 
              <label htmlFor="email">E-mail</label><br/>
              <input ref = {emailRef} type="text" id="email" name="email"/> <br/> 
            </div> 
      
            <div className = {styles.signup_button_div}> 
              <input disabled = {loading} className = {styles.signup_button} type="submit" value = "Reset Password" id="signup" name="signup"/> <br/>
            </div>
            <Link to  = "/login" style = {{textAlign: 'center', color: '#206a5d', fontWeight: 'bold', margin: '10px 0px'}}> Login Page </Link>  

          </form>
        

        </div> 
      </div>
    </> 
  )
}
