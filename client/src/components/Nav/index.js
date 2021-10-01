import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import "./navStyle.scss";
import API from "../../utils/API"
import { UserContext } from "../../UserContext";

function Nav( { unAuthorizedStatus }) {
  const history = useHistory();
  const { user, setUser } = useContext(UserContext);
  console.log("nav component line 9:" + user);

  async function handleLogout(event) {
    event.preventDefault();
    console.log('handleLogout function called')
    API.logoutUser()
      .then(response => {
        console.log(response);
        if (response.status === 200) {
            console.log("handlelogout line 19:" + response.data);
            console.log("handlelogout line 20:" + response.data.message)
            console.log("handlelogout line 21:" + response.data.logged_in)
            setUser(user => {
              return user=response.data.logged_in
              })
            unAuthorizedStatus();
            history.push("/");
            alert(response.data.message)
         } else {
          alert("You are not currently logged in.");
          history.push("/Login");
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

              <div className="a-tag nav-link">
                <span className="nav-link-span">
                  <span className="u-nav">
                    <Link to="/User">
                      User
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
                      <button
                          className="btn-nav"
                          onClick = {handleLogout}>
                        Logout
                      </button>
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
