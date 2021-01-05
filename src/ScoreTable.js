import React from 'react'; 

import styles from './ScoreTable.module.css'

function Profile() { 
  return (
  <div> 
      <div className = {styles.outer_layer}> 
        <span className = {styles.table_header}> 
            <div className = {styles.left_container}>  
            </div> 
            <div className = {styles.mid_container}> 
            </div> 
            <div className = {styles.right_header_container}>
              1/5/2021
            </div>  
        </span> 
        <span className = {styles.player_span}> 
            <div className = {styles.left_container}> 
              <div className = {styles.padding_left}> 
                <div class = {styles.image_cropper}> 
                  <img src = "./headshotross.jpg" class = {styles.profile_pic}/> 
                </div>
              </div>  
              <p className = {`${styles.bold} ${styles.name}`}> Oliver Li </p>
            </div> 
            <div className = {styles.mid_container}> 
              Rank #1 
            </div> 
            <div className = {styles.right_container}>
              <div className = {styles.score_item}> 4 </div> 
              <div className = {`${styles.bold} ${styles.score_item}`}> 6</div> 
              <div className = {`${styles.bold} ${styles.score_item}`}> 6</div> 
            </div>  
        </span>
        <span className = {styles.player_span}> 
          <div className = {styles.left_container}>
              <div className ={styles.padding_left}>   
                <div class = {styles.image_cropper}> 
                  <img src = "./fed.jpg" class = {styles.profile_pic}/> 
                </div> 
              </div> 
              <p className = {styles.name}> Roger Federer</p> 
            </div> 
            <div className = {styles.mid_container}> 
              Rank #10  
            </div>
            <div className = {styles.right_container}>
              <div className = {`${styles.bold} ${styles.score_item}`}> 6 </div> 
              <div className = {styles.score_item}> 4</div> 
              <div className = {styles.score_item}> 2</div>         
            </div>  
        </span> 

      </div>
    </div>  
  );
}

export default Profile; 