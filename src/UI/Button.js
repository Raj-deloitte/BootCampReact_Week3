import React from "react";
import "./Button.css";

const Button = ({ type, onClick, disabled, children }) => {
  let buttonClass = `button ${type}`;
  if (children === "Enrolled") {
    buttonClass = "button enrolled";
  }

  return (
    <button className={buttonClass} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
