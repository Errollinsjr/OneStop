import React, { createElement } from "react";
import ReservationButton from "./ReservationButton";
import "./addDetailsPageStyles.scss"

function AddDetailsPage() {

    var down = document.getElementById("GFG_DOWN");

    const handleReservationAppend = event => {
        event.preventDefault();
        // create Form Element      
        // Create a break line element
        var br = document.createElement("br"); 

        // Create a form synamically
        var form = document.createElement("form");
        form.setAttribute("id", "reservationForm")
        form.setAttribute("method", "post");
        form.setAttribute("action", "submit.php");

        // Create an input element for Full Name
        var ResNumber = document.createElement("input");
        ResNumber.setAttribute("type", "text");
        ResNumber.setAttribute("name", "ReservationName");
        ResNumber.setAttribute("placeholder", "Reservation Name");

        // Create an input element for date of birth
        var CN = document.createElement("input");
        CN.setAttribute("type", "text");
        CN.setAttribute("name", "ConfirmationNumber");
        CN.setAttribute("placeholder", "Confirmation Number");

        // Create an input element for emailID
        var description = document.createElement("input");
        description.setAttribute("type", "text");
        description.setAttribute("name", "description");
        description.setAttribute("placeholder", "Description or Link");

        // Create an input element for password
        var upload = document.createElement("input");
        upload.setAttribute("type", "text");
        upload.setAttribute("name", "upload");
        upload.setAttribute("placeholder", "upload image");

        // create a submit button
        var s = document.createElement("input");
        s.setAttribute("type", "submit");
        s.setAttribute("value", "Submit");

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

        // Append the Password to the form
        form.appendChild(upload); 
        form.appendChild(br.cloneNode()); 

        // Append the submit button to the form
        form.appendChild(s); 

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
                    <button>Reservations</button>
                    <div className="dropdown-content">
                    <ReservationButton id={"GFG_DOWN"} onClick={handleReservationAppend}>Airplane</ReservationButton>
                    <button>Car</button>
                    <button>Hotel</button>
                    <button>Restaurant</button>
                    <button>Other</button>
                    </div>
                    </div>

                            

                                 
                        
                    </div>
                    <div className="card-footer text-center py-3">
                        <button className="large forgotpass"><a href="/Edit">Submit<i class="fas fa-drum-steelpan    "></i></a></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}

export default AddDetailsPage;

// image of place
// reservation type dropdown
// description of reservation or upload
// comfirmation number for reservation
// travelers