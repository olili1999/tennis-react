import React, { useState, useEffect } from "react";
import Card from "../Card";
import ScoreTable from "../ScoreTable";
import styles from "./Profile.module.css";
import {
  FaFacebook,
  FaRegEnvelope,
  FaInstagram,
  FaPhoneVolume,
} from "react-icons/fa";
import Loading from "../Loading";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import Avatar from "@material-ui/core/Avatar";

function Profile() {
  const { user } = useParams();
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("currentUser"))
  );
  const [bio, setBio] = useState("");
  const [USTA, setUSTA] = useState("");
  const [UTR, setUTR] = useState("");
  const [email, setEmail] = useState("");
  const [fb, setFB] = useState("");
  const [insta, setInsta] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [fullName, setFullName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [uid, setUID] = useState(null);

  db.collection("usernames")
    .doc(user)
    .get()
    .then((documentSnapshot) => {
      setUID(documentSnapshot.data().uid);
    });

  useEffect(() => {
    if (uid !== null) {
      db.collection("users")
        .doc(uid)
        .get()
        .then((documentSnapshot) => {
          setAvatar(documentSnapshot.data().profile.profile_pic);
        });
      db.collection("users")
        .doc(uid)
        .get()
        .then((documentSnapshot) => {
          setFullName(documentSnapshot.data().full_name);
        });
      db.collection("users")
        .doc(uid)
        .get()
        .then((documentSnapshot) => {
          setFB(documentSnapshot.data().facebook);
        });
      db.collection("users")
        .doc(uid)
        .get()
        .then((documentSnapshot) => {
          setInsta(documentSnapshot.data().instagram);
        });
      db.collection("users")
        .doc(uid)
        .get()
        .then((documentSnapshot) => {
          setBio(documentSnapshot.data().profile.profile_bio);
        });

      db.collection("users")
        .doc(uid)
        .get()
        .then((documentSnapshot) => {
          setUSTA(documentSnapshot.data().USTA);
        });
      db.collection("users")
        .doc(uid)
        .get()
        .then((documentSnapshot) => {
          setUTR(documentSnapshot.data().UTR);
        });

      db.collection("users")
        .doc(uid)
        .get()
        .then((documentSnapshot) => {
          setEmail(documentSnapshot.data().email);
        });
      db.collection("users")
        .doc(uid)
        .get()
        .then((documentSnapshot) => {
          setPhoneNum(documentSnapshot.data().phone_num);
        });
    }
  });

  // console.log(usernameURL);
  // db.collection("usernames")
  //   .doc(usernameURL)
  //   .get()
  //   .then((documentSnapshot) => {
  //     setUID(documentSnapshot.data().uid);
  //   });

  useEffect(() => {
    let isSubscribed = true;
    setTimeout(() => {
      if (isSubscribed) {
        setLoading(false);
      }
    }, 1000);

    return () => (isSubscribed = false);
  }, []);
  return (
    <>
      {loading === false ? (
        <div className={styles.outer_container}>
          <div className={styles.left_container}>
            <div className={styles.profile_container}>
              <div className={styles.profile_img_container}>
                <Avatar
                  src={avatar}
                  variant="circular"
                  style={{
                    backgroundColor: "#206a5d",
                    fontSize: "50px",
                    height: "75px",
                    width: "75px",
                  }}
                ></Avatar>
              </div>
              <div className={styles.profile_right_container}>
                <div className={styles.pos_top}>
                  <p className={styles.name} style={{ color: "white" }}>
                    {fullName}
                  </p>
                </div>
                <div className={styles.pos_bot}>
                  <div className={styles.icon_container}>
                    <a href={fb} target="_blank">
                      <FaFacebook
                        size={25}
                        className={styles.icon}
                        style={{ color: "white" }}
                      />
                    </a>
                    <a href={insta} target="_blank">
                      <FaInstagram
                        size={25}
                        className={styles.icon}
                        style={{ color: "white" }}
                      />
                    </a>
                    <a href={`mailto:${email}`} target="_blank">
                      <FaRegEnvelope
                        size={25}
                        className={styles.icon}
                        style={{ color: "white" }}
                      />
                    </a>
                    <a href={`tel: ${phoneNum}`} target="_blank">
                      <FaPhoneVolume
                        size={25}
                        className={styles.icon}
                        style={{ color: "white" }}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.text_container}>
              <p className={styles.sub_header}>Bio</p>
              <p className={styles.sub_text}>{bio}</p>
            </div>
            <div className={styles.text_container}>
              <p className={styles.sub_header}>Stats</p>
              <p className={styles.sub_text}> TwF Rank: #1 </p>
              <p className={styles.sub_text}> USTA Rating: {USTA} </p>
              <p className={styles.sub_text}> UTR Rating: {UTR} </p>
            </div>
            <div className={styles.text_container}>
              <p className={styles.sub_header}>Current Equipment </p>
              <div className={styles.gear_container}>
                <div className={styles.gear_img_container}>
                  <div className={styles.split_container}>
                    <img
                      className={styles.gear_image}
                      src="./wilson_blade.png"
                    />
                  </div>
                  <div className={styles.split_container}>
                    <img className={styles.gear_image} src="./rpm_blast.png" />
                  </div>
                </div>
                <div className={styles.gear_info_container}>
                  <div className={styles.split_container}>
                    <p className={styles.sub_text}> Racket: Wilson Blade</p>
                  </div>
                  <div className={styles.split_container}>
                    <p className={styles.sub_text}>
                      {" "}
                      Strings: Babolat RPM Blast{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.mid_container}>
            <h3> Match History </h3>
            <div className={styles.content_mid_container}>
              <h3 style={{ display: "flex", justifyContent: "center" }}>
                Total Wins: 3, Total Losses: 0{" "}
              </h3>
              <div className={styles.dummy_table}>
                <ScoreTable></ScoreTable>
                <ScoreTable></ScoreTable>
                <ScoreTable></ScoreTable>
              </div>
            </div>
          </div>

          <div className={styles.right_container}>
            <h3> Recent Activity </h3>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Profile;
