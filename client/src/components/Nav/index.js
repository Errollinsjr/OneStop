import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./navStyle.scss";
import API from "../../utils/API"
import { UserContext } from "../../UserContext";

function Nav() {
  const { user, setUser } = useContext(UserContext);
  console.log(user);

  function handleLogout(event) {
    event.preventDefault();
    API.logoutUser()
      .then(res => {
        if (res.ok) {
          alert("Logged out successfully.")
          window.location = ("/")
        } else {
          alert("You are not currently logged in.");
          window.location = ("/Login");
        }
      })
      .catch(err => console.log(err));
  }

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
            {!user ? (
              <>
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
              </>
            ) : (
              <>
                <div className="a-tag nav-link">
                  <span className="nav-link-span">
                    <span className="u-nav">
                      <Link to="/"
                          onClick = {handleLogout}>
                        Logout
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
              </>
            )}
          </div>
        </nav>
      </header>
    </>
  );
}

export default Nav;
