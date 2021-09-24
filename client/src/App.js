import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Nav from "./components/Nav";
// import "./App.scss";
// import UserTripPage from "./components/UserTripPage";
import LoginPage from "./pages/LoginPage";
import UserTripPage from "./pages/UserTripPage";
import SignUpPage from "./pages/SignUpPage";
import TripCreationPage from "./pages/TripCreationPage";
import EditPage from "./pages/EditPage";

function App() {
  return (
    <Router>
      <div>
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

          <Route exact path="/User">
            <UserTripPage />
          </Route>

          <Route exact path="/Create">
            <TripCreationPage />
          </Route>

          <Route exact path="/Edit">
            <EditPage />
          </Route>

          {/* <Route>
            <NoUrlMatch /> 
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
