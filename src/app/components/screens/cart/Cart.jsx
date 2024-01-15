import React from "react";
import "./cart.css";

import product1 from "./../../../img/product-001.png"
import barChartCart from "./../../../img/bar-chart-cart.svg"
import heartCart from "./../../../img/heart-cart.svg"


const Cart = () => {
  return (
    <div className="cart">

      <div className="cart__header">
        <span className="cart__header-promo">Новинка</span>
        <span className="cart__header-icon">
          <img src={barChartCart} alt="" />
          <img src={heartCart} alt="" />
        </span>
      </div>
      <div className="cart__img">
        <img src={product1} alt="" />
        <div className="cart__img-slider">
          <div className="slide"></div>
          <div className="slide active"></div>
          <div className="slide"></div>
          <div className="slide"></div>
        </div>
      </div>
      <div className="cart__info">
        <a href="#!" className="cart__info-title">Эмаль Condor ПФ-115 жёлтая 1,8 кг</a>

        <div className="sale-info">
          <span className="sale-info__price">500 р</span>
          <span className="sale-info__promo">750р</span>
          <span className="sale-info__is-have">в наличие</span>
        </div>

      </div>


    </div>
  );
};
export default Cart;