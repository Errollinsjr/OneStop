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

    // var down = document.getElementById("Reservations");

    // const handleReservationAppend = event => {
    //     event.preventDefault();
    //     // create container
    //     // var container = document.createElement("container");
    //     // // container.setAttribute("id", "reserverationContainer")
    //     // container.setAttribute("class", "container");
    //     // var rowJustify = document.createElement("row");
    //     // // rowJustify.setAttribute("id", "reserverationContainer")
    //     // rowJustify.setAttribute("class", "row justify-content-center");
    //     // var column = document.createElement("col");
    //     // // column.setAttribute("id", "reserverationContainer")
    //     // column.setAttribute("class", "col-lg-5");
    //     // var card = document.createElement("card");
    //     // // card.setAttribute("id", "reserverationContainer")
    //     // card.setAttribute("class", "card shadow-lg border-0 rounded-lg mt-5");
    //     // var cardHeader = document.createElement("card-header");
    //     // // cardHeader.setAttribute("id", "reserverationContainer")
    //     // cardHeader.setAttribute("class", "card-header header-color");
    //     // var cardBody = document.createElement("card-body");
    //     // // cardBody.setAttribute("id", "reserverationContainer")
    //     // cardBody.setAttribute("class", "card-body");
        
    //     // Create a break line element
    //     var br = document.createElement("br"); 

    //     // Create a form synamically
    //     var form = document.createElement("form");
    //     form.setAttribute("id", "reservationForm")
    //     form.setAttribute("method", "post");
    //     form.setAttribute("action", "submit.php");

    //     // Create an header above appended
    //     var headerAppend = document.createElement("h1");
    //     // ResNumber.setAttribute("id", "inputFieldAddDetails")
    //     headerAppend.setAttribute("class", "h1");
    //     // ResNumber.setAttribute("type", "text");
    //     headerAppend.setAttribute("name", "Reservation Type Here");
    //     headerAppend.setAttribute("placeholder", "Reservation Name");

    //     // Create an input element for Reservation
    //     var ResNumber = document.createElement("input");
    //     ResNumber.setAttribute("id", "inputFieldAddDetails")
    //     ResNumber.setAttribute("class", "form-control input-color");
    //     ResNumber.setAttribute("type", "text");
    //     ResNumber.setAttribute("name", "ReservationName");
    //     ResNumber.setAttribute("placeholder", "Reservation Name");

    //     // Create an input element for Confirmation #
    //     var CN = document.createElement("input");
    //     CN.setAttribute("id", "inputFieldAddDetails")
    //     CN.setAttribute("class", "form-control input-color");
    //     CN.setAttribute("type", "text");
    //     CN.setAttribute("name", "ConfirmationNumber");
    //     CN.setAttribute("placeholder", "Confirmation Number");

    //     // Create an input element for description
    //     var description = document.createElement("input");
    //     description.setAttribute("id", "inputFieldAddDetails")
    //     description.setAttribute("class", "form-control input-color");
    //     description.setAttribute("type", "text");
    //     description.setAttribute("name", "description");
    //     description.setAttribute("placeholder", "Description or Link");

    //     // create a submit button
    //     var s = document.createElement("input");
    //     s.setAttribute("class", "btn btn-primary btn-sm");
    //     s.setAttribute("type", "submit");
    //     s.setAttribute("value", "Submit");
    //     s.onClick = {handleInputChange, handleFormSubmit};

    //     // creates card around form
    //     // form.appendChild(container);
    //     // container.appendChild(rowJustify);
    //     // container.appendChild(column);
    //     // container.appendChild(card);
    //     // container.appendChild(cardHeader);
    //     // container.appendChild(cardBody);

    //     // header
    //     form.appendChild(headerAppend);
    //     form.appendChild(br.cloneNode()); 

    //     // Append the full name input to the form
    //     form.appendChild(ResNumber); 

    //     // Inserting a line break
    //     form.appendChild(br.cloneNode()); 

    //     // Append the DOB to the form
    //     form.appendChild(CN); 
    //     form.appendChild(br.cloneNode()); 

    //     // Append the emailID to the form
    //     form.appendChild(description); 
    //     form.appendChild(br.cloneNode()); 

    //     // Append the submit button to the form
    //     form.appendChild(s); 

    //     // document.getElementsByTagName("body")[0]
    //     // .appendChild(container);

    //     document.getElementsByTagName("body")[0]
    //     .appendChild(form);

    // }

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

