import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import HomePage from "./components/HomePage";
import Nav from "./components/Nav";
// import UserTripPage from "./components/UserTripPage";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <div>
        <HomePage />
        </div>
        {/* <div>
        <UserTripPage />
        </div> */}
      </div>
    </Router>
  );
}

export default App;
