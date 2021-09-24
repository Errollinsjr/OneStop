import React from "react";
import "./editPageStyles.scss"

function EditPage() {
  return (
    <>
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-5">
                <div className="card shadow-lg border-0 rounded-lg mt-6">
                    <div className="card-header header-color"><h3 className="text-center font-weight-light my-4">Edit Trip</h3></div>
                    <div className="card-body">

                        <form id="editForm">

                            <div className="form-floating mb-3">
                            <label for="inputEmail">Title of Trip</label>
                                <input className="form-control input-color" id="inputName" type="name" placeholder="Name" />
                            </div>

                            

                                 
                        </form>
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

export default EditPage;

// image of place
// reservation type dropdown
// description of reservation or upload
// comfirmation number for reservation
// travelers