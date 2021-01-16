import React, { useRef, useEffect, useState, useContext } from "react";
import styles from "./Account.module.css";
import app, { db } from "../firebase";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import { LoggedContext } from "../contexts/LoggedContext";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";

export default function Account() {
  const [error, setError] = useState("");
  const { logged, setLogged } = useContext(LoggedContext);
  const { logout } = useAuth();
  const history = useHistory();
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [fileURL, setFileURL] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const bioRef = useRef();
  const instaRef = useRef();
  const fbRef = useRef();
  const phoneRef = useRef();

  const [USTA, setUSTA] = useState("1.0");
  const [UTR, setUTR] = useState("1.0");

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("currentUser"))
  );

  const onFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) {
      return;
    }
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setFileURL(await fileRef.getDownloadURL());
  };

  const USTAChange = (e) => {
    setUSTA(e.target.value);
  };

  const UTRChange = (e) => {
    setUTR(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (fbRef.current.value !== "") {
      db.collection("users")
        .doc(currentUser["uid"])
        .update({ facebook: fbRef.current.value });
    }
    if (instaRef.current.value !== "") {
      db.collection("users")
        .doc(currentUser["uid"])
        .update({ instagram: instaRef.current.value });
    }
    if (phoneRef.current.value !== "") {
      db.collection("users")
        .doc(currentUser["uid"])
        .update({ phone_num: phoneRef.current.value });
    }
    if (UTR !== "") {
      db.collection("users").doc(currentUser["uid"]).update({ UTR: UTR });
    }
    if (USTA !== "") {
      db.collection("users").doc(currentUser["uid"]).update({ USTA: USTA });
    }
    if (fileURL !== null) {
      db.collection("users")
        .doc(currentUser["uid"])
        .update({ "profile.profile_pic": fileURL });
    }
    if (bioRef.current.value !== "") {
      db.collection("users")
        .doc(currentUser["uid"])
        .update({ "profile.profile_bio": bioRef.current.value });
    }

    fetchData();
  };

  async function handleLogout() {
    setError("");
    try {
      localStorage.removeItem("isLoggedIn");
      setLogged(false);
      await logout();
      // if (!currentUser) {
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  async function fetchData() {
    db.collection("users")
      .doc(currentUser["uid"])
      .get()
      .then((documentSnapshot) => {
        setFullName(documentSnapshot.data().full_name);
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
    <div className={styles.outer_div}>
      <Link style={{ textDecoration: "none" }} to="/profile">
        <Avatar
          src={avatar}
          variant="circular"
          className={styles.hover}
          style={{
            backgroundColor: "#206a5d",
            fontSize: "50px",
            height: "100px",
            width: "100px",
          }}
        >
          {fullname.charAt(0)}
        </Avatar>
      </Link>
      <h2 className={styles.header_text}> {fullname} </h2>
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
      <form className={styles.form} onSubmit={onSubmit}>
        <p className={styles.label}>Link Instagram</p>
        <input
          className={styles.input_field}
          ref={instaRef}
          name="insta"
          type="url"
        />
        <p className={styles.label}>Link Facebook </p>
        <input
          className={styles.input_field}
          ref={fbRef}
          name="fb"
          type="url"
        />
        <p className={styles.label}>Add Phone Number </p>
        <input
          className={styles.input_field}
          ref={phoneRef}
          name="phone"
          type="tel"
        />

        <p className={styles.label}>Change your profile picture</p>
        <input name="file-upload" onChange={onFileChange} type="file" />
        <p className={styles.label}>Change your bio</p>
        <div className={styles.text_area}>
          <textarea
            className={styles.input_field}
            placeholder="Type your bio here..."
            ref={bioRef}
            rows="10"
          ></textarea>
        </div>
        <p className={styles.label}>Change your UTR rating</p>
        <select value={UTR} onChange={UTRChange} name="ustarank" id="ustarank">
          <option value="1.0">1.0</option>
          <option value="1.5">1.5</option>
          <option value="2.0">2.0</option>
          <option value="2.5">2.5</option>
          <option value="3.0">3.0</option>
          <option value="3.5">3.5</option>
          <option value="4.0">4.0</option>
          <option value="4.5">4.5</option>
          <option value="5.0">5.0</option>
          <option value="5.5">5.5</option>
          <option value="6.0">6.0</option>
          <option value="6.5">6.5</option>
          <option value="7.0">7.0</option>
        </select>
        <p className={styles.label}>Change your USTA rating</p>
        <select
          value={USTA}
          onChange={USTAChange}
          name="ustarank"
          id="ustarank"
        >
          <option value="1.0">1.0</option>
          <option value="1.5">1.5</option>
          <option value="2.0">2.0</option>
          <option value="2.5">2.5</option>
          <option value="3.0">3.0</option>
          <option value="3.5">3.5</option>
          <option value="4.0">4.0</option>
          <option value="4.5">4.5</option>
          <option value="5.0">5.0</option>
          <option value="5.5">5.5</option>
          <option value="6.0">6.0</option>
          <option value="6.5">6.5</option>
          <option value="7.0">7.0</option>
        </select>
        <br />
        <div className={styles.update_button_div}>
          <input
            className={styles.button}
            value="Update Profile"
            type="submit"
            name="bio"
          />
        </div>
      </form>
      <button className={styles.button} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}
