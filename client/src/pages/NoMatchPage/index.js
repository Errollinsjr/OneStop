import React from "react";
import "./noMatchStyles.scss"

function NoMatch() {
  return (    
    <>
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-lg-5">
                  <div className="card shadow-lg border-0 rounded-lg mt-6">
                      <div className="card-header header-color"><h3 className="text-center font-weight-light my-4">Redirected</h3></div>
                        <div className="card-body">
  
                          <h1 id="noMatchHeader">404 page not found</h1>                                                                         
  
                      </div>                                  
                  </div>
              </div>
          </div>
      </div>
    </>        
  );
}

export default NoMatch;
