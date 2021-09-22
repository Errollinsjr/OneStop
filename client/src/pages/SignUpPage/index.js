import React from "react";
import "./signUpStyles.scss"

function SignUpPage() {
  return (
    <>
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-5">
                <div className="card shadow-lg border-0 rounded-lg mt-5">
                    <div className="card-header header-color"><h3 className="text-center font-weight-light my-4">Sign Up</h3></div>
                    <div className="card-body">

                        <form id="signupForm">

                            <div className="form-floating mb-3">
                            <label for="inputEmail">Name</label>
                                <input className="form-control input-color" id="inputName" type="name" placeholder="Name" />
                            </div>

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
                                <a className="small forgotpass" href="/password">Forgot Password?</a>
                                <button className="login-btn btn btn-primary" type="submit" id="loginBtn">Sign Up</button>
                            </div>
                        </form>
                    </div>
                    <div className="card-footer text-center py-3">
                        <div className="small forgotpass"><a href="/register">Need an account? Sign up!</a></div>
                        <div className="small forgotpass"><a href="/">Home</a></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}

export default SignUpPage;

//special class names:
//login-btn
//header-color
//input-color