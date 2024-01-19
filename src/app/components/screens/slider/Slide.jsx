import React from "react";
import "./slider.css"

const Slide = ({img}) => {
  return (
    <div className="slide__img">
      <img src={img} alt="" />
    </div>
  );
};
export default Slide;