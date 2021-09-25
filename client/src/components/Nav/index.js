import React from "react";
import "./navStyle.scss";

function Nav() {
  return (
    <>
      <header id="nav-wrapper">
        <nav id="nav">
          <div className="nav left">
            <span className="gradient skew"><h1 className="logo un-skew"><a href="/">OneStop</a></h1></span>
            <button id="menu" className="btn-nav"><span className="fas fa-bars"></span></button>
          </div>
          <div className="nav right">
          <Link to="/"> 
            <a href="/" className="nav-link active"><span className="nav-link-span"><span className="u-nav">Home</span></span></a>
          </Link> 

          <Link to="/Login">  
            <a href="/Login" className="nav-link"><span className="nav-link-span"><span className="u-nav">Login</span></span></a>
          </Link>

          <Link to="/SignUp">  
            <a href="/SignUp" className="nav-link"><span className="nav-link-span"><span className="u-nav">SignUp</span></span></a>
          </Link> 

          <Link to="/User">  
            <a href="/User" className="nav-link"><span className="nav-link-span"><span className="u-nav">UserTrip</span></span></a>
          </Link> 
            
          <Link to="/Create">   
            <a href="/Create" className="nav-link"><span className="nav-link-span"><span className="u-nav">CreateTrip</span></span></a>
          </Link>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Nav;
