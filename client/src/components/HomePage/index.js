import React from "react";
import "./homeStyles.scss"

function HomePage() {
  return (
    <>
    <div className="Iam">    
     <p>One Stop For All Your</p>
        <b>
            <div class="innerIam">
            Trips<br /> 
            New Memories<br />
            Destinations<br />
            Reservations<br />
            Joy
            </div>
        </b>
    </div>
    <div className="createyourtrip-button">    
        <button>Create Your Trip</button>
    </div>
    <div className="video-container">
    <iframe src='https://gfycat.com/ifr/AccurateVapidGrunion?controls=0&hd=1' scrolling="no" title="gif"></iframe>
    </div>
    </>
  );
}

export default HomePage;
