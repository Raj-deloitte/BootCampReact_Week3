import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

const Button = ({ type, onClick, children }) => {
  let buttonClass = `button ${type}`;
  if (children === "Enrolled") {
    buttonClass = "button enrolled";
  }

  return (
    <button
      className={buttonClass }
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Button;
