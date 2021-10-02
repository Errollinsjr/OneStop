import React, { useState, useMemo, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch  } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Nav from "./components/Nav";
import LoginPage from "./pages/LoginPage";
import UserTripPage from "./pages/UserTripPage";
import SignUpPage from "./pages/SignUpPage";
import TripCreationPage from "./pages/TripCreationPage";
import AddDetailsPage from "./pages/AddDetailsPage";
import ReservationsPage from "./pages/ReservationsPage";
import EditTripPage from "./pages/EditTripPage";
import { UserContext } from "./UserContext";
import { AuthContext } from "./AuthContext"
import API from "./utils/Auth";

function App() {
  const [user, setUser] = useState(false);
  const [authorized, setAuthorized] = useState(false);
 
  console.log("app line 17:" + user);

  useEffect(() => {
    setUser(JSON.parse(window.localStorage.getItem('user')));
    returnAuthStat();
  }, []);

  useEffect(() => {
    window.localStorage.setItem('user', user);
  }, [user]);

  const providerValue = useMemo(() => ({ user, setUser }), [user, setUser]);

  async function returnAuthStat () {
    console.log('requireAuth called')
    const data = await API.checkAuthorization();
    console.log(data.data.authorized);
      setAuthorized(data.data.authorized);
      return data.data.authorized;
  }

  console.log("provider value, app line 19:" + providerValue);

  function authorizedStatus() {
    setAuthorized(true);
  }

  function unAuthorizedStatus() {
    setAuthorized(false);
  }

  return (
    <Router>
      <div>
        <AuthContext.Provider value={authorized}>
        <UserContext.Provider value={providerValue}>
          <Nav unAuthorizedStatus={unAuthorizedStatus}/>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>

            <Route exact path="/Login">
              <LoginPage authorizedStatus ={authorizedStatus} />
            </Route>

            <Route exact path="/SignUp">
              <SignUpPage/>
            </Route> 

            <Route exact path="/User" >
              {(authorized) ?  ( <UserTripPage />) : (<LoginPage authorizedStatus ={authorizedStatus}/>)}
            </Route>

            <Route exact path="/Create" >
              {(authorized) ? (<TripCreationPage />) : (<LoginPage authorizedStatus ={authorizedStatus}/>)}
            </Route>

            <Route exact path="/AddDetails/:id" >
              {(authorized) ? (<AddDetailsPage />) : (<LoginPage authorizedStatus ={authorizedStatus}/>)}
            </Route>
            <Route exact path={"/User/:trip_id"}>
              {(authorized) ? (<ReservationsPage />) : (<LoginPage authorizedStatus = {authorizedStatus}/>)}
            </Route>

            <Route exact path="/edit_trip/:id" >
            {(authorized) ? (<EditTripPage />) : (<LoginPage authorizedStatus ={authorizedStatus}/>)}
            </Route>

            {/* <Route>
              <NoUrlMatch /> 
            </Route> */}
          </Switch>
        </UserContext.Provider>
        </AuthContext.Provider>
      </div>
    </Router>
  );
}

export default App;
