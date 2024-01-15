import React from "react";
import promo4 from "./../../../img/promo-4.png"

import "./promo.css";

const Promo = () => {
  return (
    <section className="promo">
      <div className="container">
        <div className="promo__column">
          <div className="promo__stock-1">
            <span className="promo__stock-1-title">DeWALT - Инструмент с настоящим характером</span>
          </div>
          <div className="promo__stock-2"></div>
          <div className="promo__stock-3">
            <div className="promo__stock-3-up"></div>
            <div className="promo__stock-3-down">
              <img src={promo4} alt="Промо 4" />
              <h3 className="promo__stock-title">Акции на сверла</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Promo;