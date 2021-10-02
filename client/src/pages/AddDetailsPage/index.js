import React, {useState} from "react";
import { Link } from "react-router-dom";
import ReservationButton from "./ReservationButton";
import "./addDetailsPageStyles.scss"
import ReservationEditButton from "./ReservationModal/ReservationEdit";
import Modal from "./ReservationModal/Modal";
import { useHistory } from "react-router-dom";

function AddDetailsPage() {
const history = useHistory();   

    const [formObject, setFormObject] = useState({
        type: "",
        name: "",
        confirmation: "",
        description: "",
    });

    //handle updating component state when user types into input fields
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
    };

    //when form is submitted use API.saveTrip method to save trip to DB
    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.name && formObject.confirmation) {
            API.saveTrip({
            type: formObject.type,
            name: formObject.name,
            confirmation: formObject.confirmation,
            description: formObject.description,
            })
            .then(res => history.push("/AddDetails/" + res.data.data.id))
            .catch(err => console.log(err));
        }
    }

    // const [title, setTitle] = useState("");
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // const handleTitle = (...ReservationButton) => {
    //     title = ReservationButton.title;
    //     setTitle = title;
    //     return setTitle; 
    // }
    // var down = document.getElementById("Reservations");

    const handleReservationAppend = event => {
        event.preventDefault();
        
        // Create a break line element
        var br = document.createElement("br"); 

        // Create a form synamically
        var form = document.createElement("form");
        form.setAttribute("id", "reservationForm")
        form.setAttribute("method", "post");
        form.setAttribute("action", "submit.php");

        // Create an header above appended
        // var headerAppend = document.createElement("h1");
        // ResNumber.setAttribute("id", "inputFieldAddDetails")
        // headerAppend.setAttribute("class", "h1");
        // ResNumber.setAttribute("type", "text");
        // headerAppend.setAttribute("name", "Reservation Type Here");
        // headerAppend.setAttribute("placeholder", "Reservation Name");

        // Create an input element for Reservation
        var ResNumber = document.createElement("input");
        ResNumber.setAttribute("id", "inputFieldAddDetails")
        ResNumber.setAttribute("class", "form-control input-color");
        ResNumber.setAttribute("type", "text");
        ResNumber.setAttribute("name", "ReservationName");
        ResNumber.setAttribute("placeholder", "Reservation Name");
        ResNumber.setAttribute("value", formObject.name);
        ResNumber.setAttribute("onChange", {handleInputChange});

        // Create an input element for Confirmation #
        var CN = document.createElement("input");
        CN.setAttribute("id", "inputFieldAddDetails")
        CN.setAttribute("class", "form-control input-color");
        CN.setAttribute("type", "text");
        CN.setAttribute("name", "ConfirmationNumber");
        CN.setAttribute("placeholder", "Confirmation Number");
        CN.setAttribute("value", formObject.confirmation);
        CN.setAttribute("onChange", {handleInputChange});

        // Create an input element for description
        var description = document.createElement("input");
        description.setAttribute("id", "inputFieldAddDetails")
        description.setAttribute("class", "form-control input-color");
        description.setAttribute("type", "text");
        description.setAttribute("name", "description");
        description.setAttribute("placeholder", "Description or Link");
        description.setAttribute("value", formObject.description);
        description.setAttribute("onChange", {handleInputChange});

        // create a submit button
        var s = document.createElement("input");
        s.setAttribute("class", "btn btn-primary btn-sm");
        s.setAttribute("type", "submit");
        s.setAttribute("value", "Submit");
        s.setAttribute("disabled", !(formObject.name && formObject.confirmation));
        s.setAttribute("onClick", {handleFormSubmit});

        // header
        form.appendChild(headerAppend);
        form.appendChild(br.cloneNode()); 

        // Append the full name input to the form
        form.appendChild(ResNumber); 

        // Inserting a line break
        form.appendChild(br.cloneNode()); 

        // Append the DOB to the form
        form.appendChild(CN); 
        form.appendChild(br.cloneNode()); 

        // Append the emailID to the form
        form.appendChild(description); 
        form.appendChild(br.cloneNode()); 

        // Append the submit button to the form
        form.appendChild(s); 

        // document.getElementsByTagName("body")[0]
        // .appendChild(container);

        document.getElementsByTagName("body")[0]
        .appendChild(form);
            
    }


  return (
    <>
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-5">
                <div className="card shadow-lg border-0 rounded-lg mt-6">
                    <div className="card-header header-color"><h3 className="text-center font-weight-light my-4">Add Details</h3></div>
                        <div className="card-body">
                            <div className="dropdown">
                                <button className="btn btn-primary btn-md">Reservations</button>
                                    <div className="dropdown-content">
                                        <ReservationButton title={"Airplane Reservation"} onClick={handleReservationAppend}>Airplane</ReservationButton>
                                        <ReservationButton title={"Rental Reservation"} onClick={handleReservationAppend}>Car</ReservationButton>
                                        <ReservationButton title={"Hotel Reservation"} onClick={handleReservationAppend}>Hotel</ReservationButton>
                                        <ReservationButton title={"Restaurant Reservation"} onClick={handleReservationAppend}>Restaurant</ReservationButton>
                                        <ReservationButton title={"Misc"} onClick={handleReservationAppend}>Other</ReservationButton>
                                    </div>
                            </div>

                            <h1 id="addDetailsRes">Type of Reservation Here</h1>                                                                         
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

