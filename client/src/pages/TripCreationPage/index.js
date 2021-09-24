import React from "react";
import "./tripCreationStyles.scss"

function TripCreationPage() {
  return (
    <>
    <div className="back1">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-5">
                <div className="card shadow-lg border-0 rounded-lg mt-5">
                    <div className="card-header header-color"><h3 className="text-center font-weight-light my-4">Create Your Trip</h3></div>
                    <div className="card-body">

                        <form id="signupForm">

                            <div className="form-floating mb-3">
                            <label for="inputEmail">Title of Trip</label>
                                <input className="form-control input-color" id="inputName" type="name" placeholder="Name" />
                            </div>

                            <div className="form-floating mb-3">
                            <label for="inputEmail">Start Dates</label>
                                <input className="form-control input-color" id="inputStartDate" type="date" />
                                
                            </div>

                            <div className="form-floating mb-3">
                                <label for="inputPassword">End Date</label>
                                <input className="form-control input-color" id="inputEndDate" type="date"/>
                                
                            </div>

                            <div className="form-floating mb-3">
                                <label for="inputPassword">Tags</label>
                                <input className="form-control input-color" id="inputTags" type="Tags" placeholder="Up to 5 tags" />
                                
                            </div>     
                        </form>
                    </div>
                    <div className="card-footer text-center py-3">
                        <button className="large forgotpass btn btn-primary next-btn"><a href="/Edit">Next Step<i class="fas fa-drum-steelpan    "></i></a></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </>
  );
}

export default TripCreationPage;
