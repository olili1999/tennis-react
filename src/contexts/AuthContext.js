import React, { useContext, useState, useEffect } from "react";

import { auth } from "../firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  // these are promises so they must be returned
  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  // https://stackoverflow.com/questions/48855851/how-do-i-keep-a-user-logged-into-firebase-after-refresh-in-react-js
  // https://www.google.com/search?q=auth+persistence+firebase&rlz=1C1CHBF_enUS771US771&oq=auth+persistence&aqs=chrome.1.69i57j0i457j0i22i30j0i10i22i30i395j0i22i30i395l2j69i60l2.2822j1j4&sourceid=chrome&ie=UTF-8
  function logout() {
    localStorage.removeItem("currentUser");
    return auth.signOut();
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        localStorage.setItem("currentUser", JSON.stringify(user));
        setCurrentUser(user);
      }
    });
    setLoading(false);
    return unsubscribe;
  }, []);

  // export the functions youve created
  const value = {
    currentUser,
    signup,
    login,
    logout,
    resetPassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
