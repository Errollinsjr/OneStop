import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import "./loginStyles.scss";
import { UserContext } from "../../UserContext";


function LoginPage({ authorizedStatus }) {
    const { setUser } = useContext(UserContext);
    const history = useHistory();
    
    async function handleLogin(e) {
    e.preventDefault();
    const email = document.querySelector('#inputEmail').value.trim();
    const password = document.querySelector('#inputPassword').value.trim();
    
        if (email && password) {
            const response = await fetch('/api/user/login', {
                method: 'POST',
                body: JSON.stringify({email, password}),
                headers: { 'Content-Type': 'application/json' },
            });
    
            if (response.status === 409) {
                response.json().then(data => {
                    alert(data.message);

                });   
            } else if (response.ok) {
                response.json().then(data => {
                    console.log(data);
                    console.log(data.message)
                    console.log(data.logged_in)
                    console.log(data.user_id)
                    console.log(data.user_name)
                    setUser(user => {
                        return user=data.logged_in
                    });
                    authorizedStatus()
                    history.push("/User");
                })

            } else {
                window.location = '/404';
            }
        }
    }
  
  return (
    <>
    <div className =' height back-login' >
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-9 col-sm-9 col-md-7 col-lg-5">
                    <div className="card shadow-lg border-0 rounded-lg mt-5">
                        <div className="card-header header-color"><h3 className="text-center font-weight-light my-4">Login</h3></div>
                        <div className="card-body">
                            <form id="loginForm">
                                <div className="form-floating mb-3">
                                <label htmlFor="inputEmail">Email address</label>
                                    <input className="form-control input-color" 
                                        id="inputEmail" 
                                        type="email" 
                                        placeholder="name@example.com" />
                                    
                                </div>
                                <div className="form-floating mb-3">
                                <label htmlFor="inputPassword">Password</label>
                                    <input className="form-control input-color" id="inputPassword" type="password" placeholder="Password" />
                                    
                                </div>
                                <div className="form-check mb-3">
                                    <input className="form-check-input" id="inputRememberPassword" type="checkbox" value="" />
                                    <label className="form-check-label" htmlFor="inputRememberPassword">Remember Password</label>
                                </div>
                                <div className="d-flex align-items-center justify-content-center mt-4 mb-0">
                                    <a className="small" href="/password">Forgot Password?</a>
                                    <button className="btn btn-primary login-btn" type="submit" id="loginBtn" onClick= {handleLogin}>Login</button>
                                </div>
                            </form>
                        </div>
                        <div className="card-footer text-center py-3">
                            <div className="small">
                                <Link to="/SignUp">
                                    Need an account? Sign up!
                                </Link>
                            </div>
                            <div className="small">
                                <Link to="/">
                                    Home
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}

export default LoginPage;
