import React from "react";
// import "./buttonStyles.css";

// Destructuring the type, className, children and onClick props, applying them to the button element
function ReservationEditButton({ children, onClick }) {
  return (
    <button onClick={onClick} className="tripModal btn-primary btn-md">
      {children}
    </button>
  );
}

export default ReservationEditButton;