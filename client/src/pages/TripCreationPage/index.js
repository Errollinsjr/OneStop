import React, { useState, useContext } from "react";
import API from "../../utils/API"
import "./tripCreationStyles.scss"
//import Uploader from "./Uploader.js";
import { useHistory } from "react-router-dom";
import { EditTripContext } from "../../EditTripContext";

function TripCreationPage() {
    const history = useHistory();
    const { setEditTrip } = useContext(EditTripContext);

  //setting initial state
  const [formObject, setFormObject] = useState({
      trip_name: "",
      start_date: "",
      end_date: "",
      tags: [],
      //upload: ""
  });

  //handle updating component state when user types into input fields
  function handleInputChange(event) {
      const { name, value } = event.target;
      setFormObject({...formObject, [name]: value})
      console.log(formObject.tags);
      console.log(formObject.tags.length)
  };

  //when form is submitted use API.saveTrip method to save trip to DB
  function handleFormSubmit(event) {
      event.preventDefault();
      if (formObject.trip_name && formObject.start_date && formObject.end_date) {
          API.saveTrip({
            trip_name: formObject.trip_name,
            start_date: formObject.start_date,
            end_date: formObject.end_date,
            tags: (!formObject.tags.length) ? ["None"] : formObject.tags.split(','),
            //upload: formObject.upload
          })
          .then(res => {setEditTrip(true); history.push("/AddDetails/" + res.data.data.id)})
          .catch(err => console.log(err));
      }
  }

  return (
    <>
    {/* <div className='height back1'>
        <div className="trip-create-container"> */}
            <div className="back1 d-flex justify-content-center align-items-center trip-create-container">
                <div className="w-50">
                    <div className="card shadow-lg border-0 rounded-lg">
                        <div className="card-header header-color">
                            <h3 className="text-center font-weight-light my-4">Create Your Trip
                            </h3>
                        </div>
                        <div className="card-body scroll">

                            <form id="signupForm">

                                <div className="form-floating mb-3">
                                <label htmlFor="inputName">Title of Trip</label>
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
                                <label htmlFor="inputStartDate">Start Date</label>
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
                                    <label htmlFor="inputEndDate">End Date</label>
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
                                    <label htmlFor="inputTags">Tags</label>
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

                                

                                {/*
                                For future development
                                 <div>
                                    <label>Trip Image</label>
                                    <br/>
                                    <Uploader 
                                        name="upload"
                                        value={formObject.upload}
                                        onChange={handleInputChange}/>
                                </div> */}
                            </form>



                        </div>
                        <div className="card-footer text-center py-3">
                            <button 
                                className="btn btn-primary btn-md"
                                disabled={!(formObject.trip_name && formObject.start_date && formObject.end_date)}
                                onClick={handleFormSubmit}> Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        {/* </div>
    </div> */}
    </>
  );
}

export default TripCreationPage;