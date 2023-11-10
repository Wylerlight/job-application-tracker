import React from "react";
import "./Button.css";

const Button = ({ idName, onClick, children }) => (
  <button id={idName} className="job__buttons" onClick={onClick}>
    {children}
  </button>
);

export default Button;
