import React, { useState, useMemo, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Nav from "./components/Nav";
// import "./App.scss";
// import UserTripPage from "./components/UserTripPage";
import LoginPage from "./pages/LoginPage";
import UserTripPage from "./pages/UserTripPage";
import SignUpPage from "./pages/SignUpPage";
import TripCreationPage from "./pages/TripCreationPage";
import AddDetailsPage from "./pages/AddDetailsPage";
import EditTripPage from "./pages/EditTripPage";
import { UserContext } from "./UserContext";

function App() {
  const [user, setUser] = useState(false);
  console.log("app line 17:" + user);

  useEffect(() => {
    setUser(JSON.parse(window.localStorage.getItem('user')));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('user', user);
  }, [user]);

  const providerValue = useMemo(() => ({ user, setUser }), [user, setUser]);

  console.log("provider value, app line 19:" + providerValue);
  return (
    <Router>
      <div>
        <UserContext.Provider value={providerValue}>
          <Nav />
          <Switch>
            <Route exact path={"/"}>
              <HomePage />
            </Route>

            <Route exact path={"/Login"}>
              <LoginPage />
            </Route>

            <Route exact path={"/SignUp"}>
              <SignUpPage/>
            </Route> 

            <Route exact path={"/User"}>
              <UserTripPage />
            </Route>

            <Route exact path={"/Create"}>
              <TripCreationPage />
            </Route>

            <Route exact path={"/AddDetails/:id"}>
              <AddDetailsPage />
            </Route>

            <Route exact path={"/edit_trip/:id"}>
              <EditTripPage />
            </Route>

            {/* <Route>
              <NoUrlMatch /> 
            </Route> */}
          </Switch>
        </UserContext.Provider>
      </div>
    </Router>
  );
}

export default App;
