import React from "react";
import "./about.css";

import aboutImg from "./../../../img/about.jpg";
import BlackButton from "../../ui/black-button/BlackButton";

const About = () => {

  return (
    <div className="container about__wrapper">
      <div className="about__img">
        <img src={aboutImg} alt="About" />
      </div>
      <div className="about__content">
        <h2 className="about__content-title">О нас</h2>
        <p className="about__content-text">Торговое или промышленное предприятие, торгово-промышленное объединение предпринимателей, форма организации предприятия, при которой его правосубъектность отличается от правосубъектности лиц, в нем участвующих.</p>
        <p className="about__content-text">Торговое или промышленное предприятие, торгово-промышленное объединение предпринимателей, форма организации предприятия</p>

        <div className="about__content-wrapper-btn">
          <BlackButton className="black-btn">Перейти в каталог</BlackButton>
        </div>
      </div>

    </div>
  );
};
export default About;