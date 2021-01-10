import React, {useState, useRef} from 'react'; 
import styles from './SignUp.module.css'; 

import {useAuth} from '../contexts/AuthContext'

export default function SignUp(props) { 

  const emailRef = useRef(); 
  const passwordRef = useRef(); 
  const passwordConfirmRef= useRef(); 
  // const {signup, currentUser} = useAuth(); 
  const {signup} = useAuth(); 
  const [error, setError] = useState(''); 
  const [loading, setLoading] = useState(false); 


  async function handleSubmit(e) {
    e.preventDefault(); 
    if (passwordRef.current.value !== passwordConfirmRef.current.value){ 
      return setError('Passwords do not match'); 
    }
    try{ 
      setError('')
      setLoading(true); 
      // wait for the signup to finish 
      await signup(emailRef.current.value, passwordRef.current.value); 
    }
    catch { 
      setError('Failed to create an account')
    }
    setLoading(false); 
    
  }


  return (
    <>
      <div className = {styles.justifycenter}> 
        <div className = {styles.card}> 
          <h3> Sign Up </h3> 

          {error && <p style = {{fontWeight: 'bold', color: '#cc0000', textAlign: 'center', padding: 0, margin: '20px 0 0 20px'}}> {error} </p>}
          <form onSubmit = {handleSubmit}  className = {styles.form}>
            <div className = {styles.text_div}> 
              <label htmlFor="email">E-mail</label><br/>
              <input ref = {emailRef} type="text" id="email" name="email"/> <br/> 
            </div> 
            <div className = {styles.text_div}> 
              <label htmlFor="password">Password</label><br/> 
              <input ref = {passwordRef} type="password" id="password" name="password"/><br/>
            </div>
            <div className = {styles.text_div}> 
              <label htmlFor="password">Password Confirmation</label><br/> 
              <input ref = {passwordConfirmRef} type="password" id="password_confirmation" name="password_confirmation"/><br/>
            </div>  
      
            <div className = {styles.signup_button_div}> 
              <input disabled = {loading} className = {styles.signup_button} type="submit" value = "Sign Up" id="signup" name="signup"/> <br/>
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