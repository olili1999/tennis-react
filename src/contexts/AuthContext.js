import React, {useContext, useState, useEffect} from 'react'

import {auth, db} from '../firebase'

const AuthContext = React.createContext(); 

export function useAuth(){ 
  return useContext(AuthContext); 
}


export function AuthProvider({children}) {
  const [currentUser, setCurrentUser] = useState(); 
  const [loading, setLoading] = useState(true); 

  // these are promises so they must be returned
  function signup(email, password){ 
    return auth.createUserWithEmailAndPassword(email, password); 
  }

  function login(email, password) { 
    return auth.signInWithEmailAndPassword(email, password); 
  }

  // https://stackoverflow.com/questions/48855851/how-do-i-keep-a-user-logged-into-firebase-after-refresh-in-react-js
  function logout() { 
    localStorage.removeItem('currentUser'); 
    return auth.signOut(); 
  }

  function resetPassword(email){ 
    return auth.sendPasswordResetEmail(email); 
  }


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user =>{ 
      if(user){ 
        setCurrentUser(user); 
        localStorage.setItem('currentUser', JSON.stringify(user)); 
      } 
      else{ 
        localStorage.removeItem('currentUser'); 
      }
      
    })
    setLoading(false)
    return unsubscribe; 
  }, [])
  
  // export the functions youve created
  const value = { 
    currentUser,
    signup, 
    login, 
    logout, 
    resetPassword
  }

  return (
    <AuthContext.Provider value = {value}>
      {!loading && children}
    </AuthContext.Provider>
      
  )
};
