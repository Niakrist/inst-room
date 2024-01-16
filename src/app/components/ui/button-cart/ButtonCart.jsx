import React from "react";
import "./button-cart.css";
import buttonCartSvg from "./../../../img/shopping-cart.svg";

const ButtonCart = () => {

  return (
    <button className="button-cart">
      <img src={buttonCartSvg} alt="button cart" />
    </button>
  );
};
export default ButtonCart;