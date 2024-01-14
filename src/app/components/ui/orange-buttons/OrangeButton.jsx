import React from "react";
import "./orange-button.css";

const OrangeButton = ({children}) => {
  return (
  <button className="orange-button">
    {children}
  </button>
  );
};
export default OrangeButton;