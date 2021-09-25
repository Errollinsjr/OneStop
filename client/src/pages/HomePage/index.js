import React from "react";
import { Link } from "react-router-dom";
import "./homeStyles.scss"

function HomePage() {
  return (
    <>
    <div className="HomePageText">    
     <p>One Stop For All Your</p>
        <b>
            <div className="innerHomePageText">
            Trips<br /> 
            New Memories<br />
            Destinations<br />
            Reservations<br />
            Joy
            </div>
        </b>
    </div>
    <div className="createyourtrip-button">
      <Link to="/Login">    
        <button className="homePageButton">Create Your Trip</button>
      </Link>  
    </div>
    <div className="video-container">
    <iframe src='https://gfycat.com/ifr/AccurateVapidGrunion?controls=0&hd=1' scrolling="no" title="gif"></iframe>
    </div>
    </>
  );
}

export default HomePage;
