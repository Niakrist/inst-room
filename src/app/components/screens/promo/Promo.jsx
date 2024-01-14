import React from "react";
import ArrowButton from "../../ui/arrow-button/ArrowButton";
import OrangeButton from "../../ui/orange-buttons/OrangeButton";

import promo1 from "./../../../img/promo-1.png"
import promo2 from "./../../../img/promo-2.png"
import promo3 from "./../../../img/promo-3.png"
import promo4 from "./../../../img/promo-4.png"
import "./promo.css";

const Promo = () => {
  return (
    <section className="promo">
      <div className="container">
        <div className="promo__column">
          <div className="promo__stock">
          <img src={promo1} alt="Промо 1" />
            <h3 className="promo__stock-title-big">DeWALT - Инструмент с настоящим характером</h3>
            <div className="promo__stock-big-btn">
            <OrangeButton>Перейти в каталог</OrangeButton>
            </div>
            <ArrowButton />
          </div>
          <div className="promo__stock">
            <img src={promo2} alt="Промо 2" />
            <h3 className="promo__stock-title">Акции</h3>
            <ArrowButton />
          </div>
          <div className="promo__stock-row">
            <div className="promo__stock">
              <img src={promo3} alt="Промо 3" />
              <h3 className="promo__stock-title">Новое поступление</h3>
              <ArrowButton />
            </div>
            <div className="promo__stock">
              <img src={promo4} alt="Промо 4" />
              <h3 className="promo__stock-title">Акции на сверла</h3>
              <ArrowButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Promo;