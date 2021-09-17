import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import HomePage from "./components/HomePage";
// import Trips from "./pages/Trips";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <div>
        <HomePage />
        </div>
      </div>
    </Router>
  );
}

export default App;
