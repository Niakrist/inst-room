import React from "react";
import "./black-button.css";

const BlackButton = ({children}) => {
  return (
    <button className="button-black">{children}</button>
  );
};
export default BlackButton;