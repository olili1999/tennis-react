import React, { useState, useEffect } from "react";
import styles from "./Account.module.css";
import { db } from "../firebase";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";

export default function Account() {
  const [error, setError] = useState("");
  const { logout } = useAuth();
  const history = useHistory();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("currentUser"))["uid"]
  );

  async function handleLogout() {
    setError("");
    try {
      localStorage.removeItem("isLoggedIn");

      await logout();
      if (!currentUser) {
        history.push("/loginandsignup");
      }
    } catch {
      setError("Failed to log out");
    }
  }

  db.collection("users")
    .doc(currentUser)
    .get()
    .then((documentSnapshot) => {
      setUserName(documentSnapshot.data().full_name);
    });
  db.collection("users")
    .doc(currentUser)
    .get()
    .then((documentSnapshot) => {
      setEmail(documentSnapshot.data().email);
    });

  return (
    <div>
      {`User ID: ${JSON.stringify(currentUser)}`}
      <h2 className={styles.header_text}> {userName} </h2>
      {error && (
        <p
          style={{
            fontWeight: "bold",
            color: "#cc0000",
            textAlign: "center",
            padding: 0,
            margin: "20px 0 0 20px",
          }}
        >
          {" "}
          {error}{" "}
        </p>
      )}
      <strong> E-mail: </strong> {email}
      <form onSubmit={handleLogout} className={styles.form}>
        <div className={styles.signup_button_div}>
          <input
            className={styles.signup_button}
            type="submit"
            value="Log Out"
            id="updateprofile"
            name="updateprofile"
          />{" "}
          <br />
        </div>
      </form>
    </div>
  );
}
