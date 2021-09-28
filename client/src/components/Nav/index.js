import React from "react";
import { Link } from "react-router-dom";
import "./navStyle.scss";

function Nav() {
  return (
    <>
      <header id="nav-wrapper">
        <nav id="nav">
          <div className="nav left">
            <span className="gradient skew">
              <h1 className="logo un-skew">
                <Link to="/">
                  OneStop
                </Link>
              </h1>
            </span>
          {/* <button id="menu" className="btn-nav"><span className="fas fa-bars"></span></button>  */}
          </div>

          <div className="nav right">
              <div className="a-tag nav-link">
                <span className="nav-link-span">
                  <span className="u-nav">
                    <Link to="/">
                      Home
                    </Link> 
                  </span>
                </span>
              </div>

              <div className="a-tag nav-link">
                <span className="nav-link-span">
                  <span className="u-nav">
                    <Link to="/Login">
                      Login
                    </Link>
                  </span>
                </span>
              </div>

              <div className="a-tag nav-link">
                <span className="nav-link-span">
                  <span className="u-nav">
                    <Link to="/Signup">
                      SignUp
                    </Link> 
                  </span>
                </span>
              </div>

              <div className="a-tag nav-link">
                <span className="nav-link-span">
                  <span className="u-nav">
                    <Link to="/User">  
                      UserTrip
                    </Link> 
                  </span>
                </span>
              </div>
              
              <div className="a-tag nav-link">
                <span className="nav-link-span">
                  <span className="u-nav">
                    <Link to="/Create">   
                      CreateTrip
                    </Link>
                  </span>
                </span>
              </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Nav;
