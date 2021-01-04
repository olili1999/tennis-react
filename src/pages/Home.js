import React from 'react';
import Card from '../Card';
import Nav from '../Nav';
import styles from './Home.module.css';
import { FaCheck} from 'react-icons/fa';
import CountUp from 'react-countup';
function Home() { 
  return (
        <div className = {styles.home_img_div}> 
            <img src = "./home-page-background.png" className = {styles.home_img}/>
            <img src = "./bottom-left-ellipse.png" className = {styles.top_right_ellipse}/>
            <img src = "./top-right-ellipse.png" className = {styles.bottom_left_ellipse}/>
            <div className = {styles.text_div}> 
              <h1 className = {styles.header_text}> Trying to find people to hit with? Look no further. </h1> 
              <p className = {styles.sub_header_text}> Tennis with Friends is a community of tennis players who are trying to meet people and build communities.
               Whether you just started learning or are a veteran of the sport, there’s a spot in the community for you! </p>  
              <p className = {styles.sub_header_text_2}> Meet +<CountUp separator = "," start= {900}end={1000} duration={5}/> registered players in your area today! </p> 
              <ul className = {styles.check_list} > 
                <li className = {styles.check_item}>
                  <FaCheck size = {40} style = {{color: '#206A5D'}}/>
                  <p className = {styles.check_text}> Completely free </p>
                </li> 
                <li className = {styles.check_item}>
                <FaCheck size = {40} style = {{color: '#206A5D'}}/>
                  <p className = {styles.check_text}> Welcoming players of all skill levels </p>
                </li> 
                <li className = {styles.check_item}>
                <FaCheck size = {40}  style = {{color: '#206A5D'}}/>
                  <p className = {styles.check_text}> Active and supportive community </p> 
                </li> 
              </ul> 
              <button className = {styles.get_started}> <a> Get Started </a>  </button> 

            </div> 

       
          </div> 
  ); 
}

export default Home; 