import React from "react";
import "./arrow-slider.css";
import arrowLeft from "./../../../img/arrow-left-slider.svg"
import arrowRight from "./../../../img/arrow-right-slider.svg"

const ArrowSlider = () => {
  return (
    <div className="arrow-slider">

      <button className="arrow-slider-left">
        <img src={arrowLeft} alt="" />
      </button>
      <button className="arrow-slider-right">
        <img src={arrowRight} alt="" />
      </button>
    </div>
  );
};
export default ArrowSlider;