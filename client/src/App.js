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
import AddDetailsPage from "./pages/AddDetailsPage";

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

<<<<<<< HEAD
           <Route exact path={"/SignUp"}>
            <SignUpPage/>
=======
           <Route exact path={"/SignUp"} component={SignUpPage}>
            <SignUpPage />
>>>>>>> 69758419349d50fda674e2796ba23bb5b58f8695
          </Route> 

          <Route exact path="/User">
            <UserTripPage />
          </Route>

          <Route exact path="/Create">
            <TripCreationPage />
          </Route>

          <Route exact path="/AddDetails">
            <AddDetailsPage />
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
