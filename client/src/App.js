import React, { useState, useMemo, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect  } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Nav from "./components/Nav";
import LoginPage from "./pages/LoginPage";
import UserTripPage from "./pages/UserTripPage";
import SignUpPage from "./pages/SignUpPage";
import TripCreationPage from "./pages/TripCreationPage";
import AddDetailsPage from "./pages/AddDetailsPage";
import EditTripPage from "./pages/EditTripPage";
import { UserContext } from "./UserContext";
import API from "./utils/Auth";

function App() {
  const [user, setUser] = useState(false);
 
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
      return data.data.authorized;
        // .then (res => {
        //   console.log(res.data.authorized);
        //   if (!res.data.authorized) {
        //     setAuthorized(false);
        //     setLoading(false);
        //     return false;
        //   } else {
        //     setAuthorized(true);
        //     setLoading(false);
        //     console.log("set authorized true");
        //     return true;
        //   }
        // })
        // .catch(err => console.log(err));
  }

  console.log("provider value, app line 19:" + providerValue);
  return (
    <Router>
      <div>
        <UserContext.Provider value={providerValue}>
          <Nav />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>

            <Route exact path="/Login">
              <LoginPage />
            </Route>

            <Route exact path="/SignUp">
              <SignUpPage/>
            </Route> 

            <Route exact path="/User" >
              {/* <UserTripPage /> */}
              {(returnAuthStat()) ?  ( <UserTripPage />) : (<Redirect from ="/User" to = "/Login" />)}
              {/* {(loading) ? (<div>loading...</div>) : (authorized && !loading) ? ( <UserTripPage />) : (<Redirect to="/Login" />)} */}
            </Route>

            <Route exact path="/Create" render ={() => ((!returnAuthStat()) ? (<Redirect to ="/Login" />) : <TripCreationPage />)}>
              {/* <TripCreationPage /> */}
            </Route>

            <Route exact path="/AddDetails/:id" render ={() => ((!returnAuthStat()) ? (<Redirect to ="/Login" />) : <AddDetailsPage />)}>
              {/* <AddDetailsPage /> */}
            </Route>

            <Route exact path="/edit_trip/:id" render ={() => ((!returnAuthStat()) ? (<Redirect to ="/Login" />) : <EditTripPage />)}>
              {/* <EditTripPage /> */}
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
