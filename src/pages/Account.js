import React, { useEffect, useState, useContext } from "react";
import styles from "./Account.module.css";
import app, { db } from "../firebase";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import { LoggedContext } from "../contexts/LoggedContext";

export default function Account() {
  const [error, setError] = useState("");
  const { setLogged } = useContext(LoggedContext);
  const { logout } = useAuth();
  const history = useHistory();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [fileURL, setFileURL] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("currentUser"))
  );

  const onFileChange = async (e) => {
    const file = e.target.files[0];
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setFileURL(await fileRef.getDownloadURL());
  };

  const onSubmit = (e) => {
    e.preventDefault();
    db.collection("users")
      .doc(currentUser["uid"])
      .update({ "profile.profile_pic": fileURL });
    fetchData();
  };

  async function handleLogout() {
    setError("");
    try {
      localStorage.removeItem("isLoggedIn");
      setLogged(false);
      await logout();
      if (!currentUser) {
        history.push("/loginandsignup");
      }
    } catch {
      setError("Failed to log out");
    }
  }

  async function fetchData() {
    db.collection("users")
      .doc(currentUser["uid"])
      .get()
      .then((documentSnapshot) => {
        setUserName(documentSnapshot.data().full_name);
      });
    db.collection("users")
      .doc(currentUser["uid"])
      .get()
      .then((documentSnapshot) => {
        setEmail(documentSnapshot.data().email);
      });
    db.collection("users")
      .doc(currentUser["uid"])
      .get()
      .then((documentSnapshot) => {
        setAvatar(documentSnapshot.data().profile.profile_pic);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <img width="100" height="100" src={avatar} />
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
      <strong> E-mail: </strong> {email} <br />
      {/* onSubmit={onSubmit} */}
      <form onSubmit={onSubmit}>
        {/* onChange={onFileChange} */}
        <input onChange={onFileChange} type="file" />
        <input type="text" name="userName" placeholder="NAME" />
        <button> Submit </button>
      </form>
      {/* onSubmit={handleLogout} */}
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
