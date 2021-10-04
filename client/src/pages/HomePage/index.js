import React from "react";
import { useHistory } from "react-router-dom";
import "./homeStyles.scss"

function HomePage() {
  const history = useHistory();

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
        <button className="homePageButton" onClick={() => history.push("/Create")}>Create Your Trip</button>
    </div>
    <div className="video-container">
    <iframe src='https://gfycat.com/ifr/AccurateVapidGrunion?controls=0&hd=1' scrolling="no" title="gif"></iframe>
    </div>
    </>
  );
}

export default HomePage;
