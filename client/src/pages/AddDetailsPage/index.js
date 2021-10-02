import React, {useState} from "react";
import API from "../../utils/API"
import { Link } from "react-router-dom";
import ReservationButton from "./ReservationButton";
import "./addDetailsPageStyles.scss"
import ReservationEditButton from "./ReservationModal/ReservationEdit";
import Modal from "./ReservationModal/Modal";
import {useParams} from 'react-router-dom';

function AddDetailsPage() {
    const [show, setShow] = useState(false);
    const {id} = useParams() 
    const [formObject, setFormObject] = useState({
        type: "",
        name: "",
        confirmation: "",
        description: "",
        trip_id: id
    })
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //handle updating component state when user types into input fields
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
    };

    //when form is submitted use API.saveTrip method to save trip to DB
    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.name && formObject.confirmation ) {
            API.saveReservation({
            type: formObject.type,
            name: formObject.name,
            confirmation: formObject.confirmation,
            description: formObject.description,
            trip_id: formObject.trip_id
            })
            // .then(res => history.push("/AddDetails/" + res.data.data.id))
            .catch(err => console.log(err));
        }
}


  return (
    <>
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-5">
                <div className="card shadow-lg border-0 rounded-lg mt-6">
                    <div className="card-header header-color"><h3 className="text-center font-weight-light my-4">Add Details</h3></div>
                        <div className="card-body">
                            {/* <div className="dropdown">
                                <button className="btn btn-primary btn-md">Reservations</button>
                                    <div className="dropdown-content">
                                        <ReservationButton type={"air"} onClick={handleInputChange}>Airplane</ReservationButton>
                                        <ReservationButton type={"car"} onClick={handleInputChange}>Car</ReservationButton>
                                        <ReservationButton type={"hotel"} onClick={handleInputChange}>Hotel</ReservationButton>
                                        <ReservationButton type={"restaurant"} onClick={handleInputChange}>Restaurant</ReservationButton>
                                        <ReservationButton type={"misc"} onClick={handleInputChange}>Other</ReservationButton>
                                    </div>
                            </div> */}

                            <h1 id="addDetailsRes">Type of Reservation Here</h1>
                            <form 
                                id="reservationForm"
                                method= "post"
                                action = "submit">

                            <div className="form-floating mb-3">
                            <label>Reservation Type</label>
                                <input 
                                    className="form-control input-color" 
                                    id="inputFieldAddDetails" 
                                    type="text" 
                                    name="type" 
                                    placeholder="Reservation Name" 
                                    value={formObject.type}
                                    onChange={ handleInputChange }
                                />
                            </div>
                            <div className="form-floating mb-3">
                            <label>Reservation Name</label>
                                <input 
                                    className="form-control input-color" 
                                    id="inputFieldAddDetails" 
                                    type="text" 
                                    name="name" 
                                    placeholder="Reservation Name" 
                                    value={formObject.name}
                                    onChange={ handleInputChange }
                                />
                            </div>
                            <div className="form-floating mb-3">
                            <label>Confirmation Number</label>
                                <input 
                                    className="form-control input-color" 
                                    id="inputFieldAddDetails" 
                                    type="text" 
                                    name="confirmation"
                                    placeholder="Confirmation Number"
                                    value={formObject.confirmation}
                                    onChange={handleInputChange}
                                    />
                                
                            </div>

                            <div className="form-floating mb-3">
                                <label>Description</label>
                                <input 
                                    className="form-control input-color" 
                                    id="inputFieldAddDetails" 
                                    type="text"
                                    name="description"
                                    placeholder="Description or Link"
                                    value={formObject.description}
                                    onChange={handleInputChange}
                                />
                            </div>
                            
                            <div className="form-floating mb-3">
                                <input
                                    className= "btn btn-primary btn-sm"
                                    type= "submit"
                                    value="Submit"
                                    onClick= {handleFormSubmit}
                                />
                            </div>

                        </form>                                                                         
                        </div>
                    
                    <ReservationEditButton onClick={handleShow} >View Reservations</ReservationEditButton>                    
                    <Modal onClose={handleClose} show={show}/>

                    <div className="card-footer text-center py-3">
                        <button className="btn btn-primary btn-md">
                            <div id="addDetailsSubBtn">
                                <Link to="/User"> 
                                    Finalize
                                </Link>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}

export default AddDetailsPage;

