import React, {useState, useEffect} from 'react'; 
import Card from "../Card";
import ScoreTable from "../ScoreTable";
import styles from "./Profile.module.css"; 
import { FaFacebook, FaRegEnvelope, FaInstagram, FaPhoneVolume} from "react-icons/fa";
import Loading from '../Loading'; 

function Profile() { 
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, [])

  return (
  <> 
    {loading === false ? (
      <div className = {styles.outer_container}>    
          <div className = {styles.left_container}>
            <div className = {styles.profile_container}> 
              <div className = {styles.profile_img_container}> 
                <div className = {styles.image_cropper}> 
                  <img src = "./headshotross.jpg" className = {styles.profile_pic}/> 
                </div> 
              </div> 
              <div className = {styles.profile_right_container}> 
                <div className = {styles.pos_top}>
                  <p className = {styles.name} style ={{color: 'white'}}> Oliver Li </p>
                </div>
                <div className = {styles.pos_bot}>
                  <div className = {styles.icon_container}> 
                    <FaFacebook size = {25} className = {styles.icon} style = {{color: 'white'}}/> 
                    <FaRegEnvelope size = {25} className = {styles.icon} style = {{color: 'white'}}/> 
                    <FaInstagram size = {25} className = {styles.icon} style = {{color: 'white'}}/> 
                    <FaPhoneVolume size = {25} className = {styles.icon} style = {{color: 'white'}}/> 
                  </div> 
                </div> 
              </div>   
            </div> 
            <div className = {styles.text_container}>
              <p className = {styles.sub_header}>Bio</p>
              <p className = {styles.sub_text}>Hi, I’m Oliver! I am from Southeastern
      Michigan and I’ve been playing tennis since I was 6 years old. I also really enjoy teaching so let me know if you would like some lessons :) </p>
            </div> 
            <div className = {styles.text_container}>
              <p className = {styles.sub_header}>Stats</p>
              <p className = {styles.sub_text}> TwF Rank: #1 </p>
              <p className = {styles.sub_text}> USTA Rating: 5.0 </p>
              <p className = {styles.sub_text}> UTR Rating: 8.0 </p>
            </div> 
            <div className = {styles.text_container}>
              <p className = {styles.sub_header}>Current Equipment </p>
              <div className = {styles.gear_container}> 
                <div className = {styles.gear_img_container}>
                  <div className = {styles.split_container}>  
                  <img className = {styles.gear_image} src = "./wilson_blade.png"/> 
                  </div> 
                  <div className = {styles.split_container}>  
                  <img className = {styles.gear_image} src = "./rpm_blast.png"/> 
                  </div> 
                </div> 
                <div className = {styles.gear_info_container}>
                <div className = {styles.split_container}>  
                <p className = {styles.sub_text}> Racket: Wilson Blade</p>
                </div> 
                <div className = {styles.split_container}>  
                <p className = {styles.sub_text}> Strings: Babolat RPM Blast </p>
                </div> 
                </div> 
              </div> 

            </div> 
          </div> 
          <div className = {styles.mid_container}> 
            <h3> Match History </h3> 
              <h3 style = {{display: 'flex', justifyContent: 'center'}}> Total Wins: 3, Total Losses: 0 </h3> 
              <div className = {styles.dummy_table}> 
                <ScoreTable></ScoreTable>
                <ScoreTable></ScoreTable>
                <ScoreTable></ScoreTable>
              </div> 
          </div> 
          <div className = {styles.right_container}> 
            <h3> Recent Activity </h3> 
          </div>
        </div>) :
      (<Loading/>
        )}
    </>
    );
}

export default Profile; 