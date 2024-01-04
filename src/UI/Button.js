import React from "react";
import "./Button.css";

const Button = ({ type, onClick, isEnrolled, seat, children }) => {
  let buttonClass = `button ${type}`;
  if (isEnrolled) {
    buttonClass = "button enrolled";
  }


  return (
    <button
      className={buttonClass}
      onClick={onClick}
      disabled={seat === "over"? (isEnrolled)? false:true: false}
    >
      {children}
    </button>
  );
};

export default Button;
