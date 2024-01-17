import React from "react";
import "./slider.css"
import ArrowSlider from "../../ui/arrow-slider/ArrowSlider";
import Slide from "./Slide";

const Sliders = () => {

  const brands = [
    'img/brands/brand-01.png',
    'img/brands/brand-02.png',
    'img/brands/brand-03.png',
    'img/brands/brand-04.png',
    'img/brands/brand-05.png',
    'img/brands/brand-06.png'
  ]

  return (
    <>
      <div className="container">
        <div className="sliders">
          <h2 className="sliders__title">Наши бренды</h2>
          <div className="sliders__container">
            {brands.map(brand => (
              <Slide key={brand} img={brand} />
            ))}
          </div>
        </div>
      </div>
      <ArrowSlider />
    </>
  );
};
export default Sliders;