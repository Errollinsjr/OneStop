import React, { useState } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API"
import "./tripCreationStyles.scss"
import Uploader from "./Uploader.js";

function TripCreationPage() {

  //setting initial state
  const [formObject, setFormObject] = useState({
      trip_name: "",
      start_date: "",
      end_date: "",
      tags: [""],
      upload: ""
  });

  //handle updating component state when user types into input fields
  function handleInputChange(event) {
      const { name, value } = event.target;
      setFormObject({...formObject, [name]: value})
      console.log(formObject.tags)
  };

  //when form is submitted use API.saveTrip method to save trip to DB
  function handleFormSubmit(event) {
      event.preventDefault();
      if (formObject.trip_name && formObject.start_date && formObject.end_date) {
          API.saveTrip({
            trip_name: formObject.trip_name,
            start_date: formObject.start_date,
            end_date: formObject.end_date,
            tags: formObject.tags,
            upload: formObject.upload
          })
          .then(() => setFormObject({
            trip_name: "",
            start_date: "",
            end_date: "",
            tags: [],
            upload: ""
          }))
          .then(document.location.replace('/AddDetails'))
          .catch(err => console.log(err));
      }
  }


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
                            <label for="inputName">Title of Trip</label>
                                <input 
                                    className="form-control input-color" 
                                    id="inputName" 
                                    type="name" 
                                    name="trip_name" 
                                    placeholder="Trip Name" 
                                    value={formObject.trip_name}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="form-floating mb-3">
                            <label for="inputStartDate">Start Date</label>
                                <input 
                                    className="form-control input-color" 
                                    id="inputStartDate" 
                                    type="date" 
                                    name="start_date"
                                    placeholder="Trip Start Date"
                                    value={formObject.start_date}
                                    onChange={handleInputChange}
                                    />
                                
                            </div>

                            <div className="form-floating mb-3">
                                <label for="inputEndDate">End Date</label>
                                <input 
                                    className="form-control input-color" 
                                    id="inputEndDate" 
                                    type="date"
                                    name="end_date"
                                    placeholder="Trip End Date"
                                    value={formObject.end_date}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="form-floating mb-3">
                                <label for="inputTags">Tags</label>
                                <input 
                                    className="form-control input-color" 
                                    id="inputTags" 
                                    type="Tags" 
                                    placeholder="Up to 5 tags" 
                                    name="tags"
                                    value={formObject.tags}
                                    onChange={handleInputChange}
                                />
                            </div>     

                            <div>
                                <label>Trip Image</label>
                                <br/>
                                <Uploader 
                                    name="upload"
                                    value={formObject.upload}
                                    onChange={handleInputChange}/>
                            </div>
                        </form>



                    </div>
                    <div className="card-footer text-center py-3">
                    <Link to="/AddDetails">   
                        <button 
                            className="large fas fa-drum-steelpan"
                            disabled={!(formObject.trip_name && formObject.start_date && formObject.end_date)}
                            onClick={handleFormSubmit}> Next Step
                            {/* <a href="/AddDetails">Next Step<i className="fas fa-drum-steelpan"></i></a> */}
                        </button>
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

export default TripCreationPage;
