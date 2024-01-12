import React from "react";
import "./buttonHeaderCart.css"

const ButtonHeaderCart = ({img, alt}) => {
  return (
    <button className="buttonCart">
      <img src={img} alt={alt} />
    </button>
  );
};
export default ButtonHeaderCart;