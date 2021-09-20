import React from "react";
import "./loginStyles.scss"

function LoginPage() {
  return (
    <>
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-5">
                <div className="card shadow-lg border-0 rounded-lg mt-5">
                    <div className="card-header header-color"><h3 className="text-center font-weight-light my-4">Login</h3></div>
                    <div className="card-body">
                        <form id="loginForm">
                            <div className="form-floating mb-3">
                            <label for="inputEmail">Email address</label>
                                <input className="form-control input-color" id="inputEmail" type="email" placeholder="name@example.com" />
                                
                            </div>
                            <div className="form-floating mb-3">
                            <label for="inputPassword">Password</label>
                                <input className="form-control input-color" id="inputPassword" type="password" placeholder="Password" />
                                
                            </div>
                            <div className="form-check mb-3">
                                <input className="form-check-input" id="inputRememberPassword" type="checkbox" value="" />
                                <label className="form-check-label" for="inputRememberPassword">Remember Password</label>
                            </div>
                            <div className="d-flex align-items-center justify-content-center mt-4 mb-0">
                                <a className="small" href="/password">Forgot Password?</a>
                                <button className="btn btn-primary login-btn" type="submit" id="loginBtn">Login</button>
                            </div>
                        </form>
                    </div>
                    <div className="card-footer text-center py-3">
                        <div className="small"><a href="/register">Need an account? Sign up!</a></div>
                        <div className="small"><a href="/">Home</a></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}

export default LoginPage;
//special class names:
//login-btn
//header-color
//input-color