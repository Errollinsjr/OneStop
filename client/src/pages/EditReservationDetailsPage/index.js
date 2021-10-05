import React, { useState, useEffect, useContext } from "react";
import API from "../../utils/API"
import { useHistory } from "react-router-dom";
import "./addDetailsPageStyles.scss"
// import ReservationEditButton from "./ReservationModal/ReservationEdit";
// import Modal from "./ReservationModal/Modal";
import {useParams} from 'react-router-dom';
import { EditReservationContext } from "../../EditReservationContext";

function EditReservationsPage() {
    // const [show, setShow] = useState(false);
    const history = useHistory();
    const { setEditReservation } = useContext(EditReservationContext);
    const {id} = useParams() 
    const [formObject, setFormObject] = useState({
        type: "",
        name: "",
        confirmation: "",
        description: "",
        trip_id: id
    })
    
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    //when this page mounts, grab trip id from props.match.params.id
    useEffect(() => {
        API.getReservations(id)
            .then(res => {
                setFormObject({
                    type: res.data.type,
                    name: res.data.name,
                    confirmation: res.data.confirmation,
                    description: res.data.description,
                    trip_id: id
                })
                setEditReservation(true);
            })
            .catch(err => console.log(err));
    }, [id])

    //handle updating component state when user types into input fields
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
    };

    //when form is submitted use API.saveTrip method to save trip to DB
    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.name && formObject.confirmation ) {
            API.editReservation(id, {
            type: formObject.type,
            name: formObject.name,
            confirmation: formObject.confirmation,
            description: formObject.description,
            trip_id: formObject.trip_id
            })
            .then(res => data)
            .then(history.push("/AddDetails/" + data.id))
            .catch(err => console.log(err));
        }
}


  return (
    <>
    <div className='back1 height'>
        <div className=" row justify-content-center">
            <div className="col-9 col-sm-7 col-md-5 col-lg-5">
                <div className="card shadow-lg border-0 rounded-lg mt-5 reservation-detail">
                    <div className="card-header header-color">
                        <h3 className="text-center font-weight-light my-4">Add Reservation Details</h3>
                    </div>
                    <div className="card-body">
                        
                        <form 
                            id="reservationForm"
                            method= "post"
                            action = "submit"
                        >

                            <div className="form-floating mb-3">
                                <label>Reservation Type</label>
                                <input 
                                    className="form-control input-color" 
                                    id="inputFieldAddDetails" 
                                    type="text" 
                                    name="type" 
                                    placeholder="Reservation Name" 
                                    value={formObject.type}
                                    onChange={handleInputChange}
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
                                    onChange={handleInputChange}
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
                                    type="submit"
                                    value="Submit"
                                    onClick={handleFormSubmit}
                                />
                            </div>
                        </form>                                                                         
                    </div>
                    
                    <div className="card-footer text-center py-3 d-flex justify-content-between reservation-footer">
                        {/* <button 
                            className="userTripPageButton btn btn-primary btn-sm" 
                            onClick={() => history.push("/Summary/" + formObject.trip_id)}>
                            Trip Summary
                        </button> */}
                        {/* <ReservationEditButton onClick={handleShow}>View Reservations</ReservationEditButton> */}
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* <Modal onClose={handleClose} show={show}/> */}
    </>
  );
}

export default EditReservationsPage;

