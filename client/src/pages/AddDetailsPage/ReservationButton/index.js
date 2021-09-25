import React from "react";
// import "./buttonStyles.css";

// Destructuring the type, className, children and onClick props, applying them to the button element
function ReservationButton({ children, id, onClick }) {
  return (
    <button onClick={onClick} id={id} className="reservation-btn">
      {children}
    </button>
  );
}

export default ReservationButton;
