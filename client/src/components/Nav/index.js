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
            <a href="/" className="nav-link active"><span className="nav-link-span"><span className="u-nav">Home</span></span></a>
            <a href="/Login" className="nav-link"><span className="nav-link-span"><span className="u-nav">Login</span></span></a>
            <a href="/SignUp" className="nav-link"><span className="nav-link-span"><span className="u-nav">SignUp</span></span></a>
            <a href="/User" className="nav-link"><span className="nav-link-span"><span className="u-nav">UserTrip</span></span></a>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Nav;
