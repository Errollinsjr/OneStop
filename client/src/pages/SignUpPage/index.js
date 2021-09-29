import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./signUpStyles.scss"

function SignUpPage() {
    const history = useHistory();

  async function handleSignup(e) {
    e.preventDefault();
    e.stopPropagation();

    const name = document.querySelector('#inputName').value.trim();
    const email = document.querySelector('#inputEmail').value.trim();
    const phone = document.querySelector('#inputPhone').value.trim();
    const password = document.querySelector('#inputPassword').value.trim();
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const phonePattern = /^\d{10}$/;

    if (!name) {
        alert('Name is required.');
        return;
    } else if (!emailPattern.test(email)) {
        alert('Please provide a valid email address for registration.');
        return;
    } else if (password.length < 6) {
        alert('Password length must be greater than or equal to 6.');
        return;
    } else if (!phonePattern.test(phone)) {
        alert('Please provide a 10-digit phone number for registration.');
        return;
    }
        else {
            const response = await fetch('/api/user/signup', {
                method: 'POST',
                body: JSON.stringify({name, email, phone, password}),
                headers: { 'Content-Type': 'application/json' },
            });
            console.log(response);
            if (response.status === 409) {
                response.json().then(data => {
                    alert(data.message);
                });
            } else if (response.status === 200) {
                response.json().then(data => {
                    alert(data.message);
                });
                history.push("/Login");
            } else {
                alert('test');
            };
        } 
        
    }
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
                            <label htmlFor="inputEmail">Name</label>
                                <input className="form-control input-color" id="inputName" type="name" placeholder="Name" />
                            </div>

                            <div className="form-floating mb-3">
                            <label htmlFor="inputEmail">Email address</label>
                                <input className="form-control input-color" id="inputEmail" type="email" placeholder="name@example.com" />
                                
                            </div>
                            <div className="form-floating mb-3">
                            <label htmlFor="inputPhone">Phone number</label>
                                <input className="form-control input-color" id="inputPhone" type="phoneNumber" placeholder="Enter 9 digit phone number" />
                                
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
                                <Link className="small forgotpass" to="/password">Forgot Password?</Link>
                                <button className="login-btn btn btn-primary" type="submit" id="loginBtn" onClick={handleSignup}>Sign Up</button>
                            </div>
                        </form>
                    </div>
                    <div className="card-footer text-center py-3">
                        <div className="small forgotpass">
                            <Link to="/Login">
                                Have an account? Login!
                            </Link>
                        </div>
                        <div className="small forgotpass">
                            <Link to="/">
                                Home
                            </Link>
                        </div>
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