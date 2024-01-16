import React from "react";
import "./cart.css";

import product1 from "./../../../img/product-001.png"
import barChartCart from "./../../../img/bar-chart-cart.svg"
import heartCart from "./../../../img/heart-cart.svg"
import ButtonCart from "../../ui/button-cart/ButtonCart";


const Cart = ({...cart}) => {

  console.log('cart_', cart._id)

  return (
    <li className="cart">

      <div className="cart__header">
        {cart.promo && <span className="cart__header-promo">{cart.promo}</span>}
        <span className="cart__header-icon">
          <img src={barChartCart} alt="" />
          <img src={heartCart} alt="" />
        </span>
      </div>
      <div className="cart__img">
        <img src={cart.img} alt="" />
        </div>
        <div className="cart__img-slider">
          <div className="slide"></div>
          <div className="slide active"></div>
          <div className="slide"></div>
          <div className="slide"></div>
      </div>
      <div className="cart__info">
        <a href="#!" className="cart__info-title">{cart.title}</a>

        <div className="sale-info">
          <span className="sale-info__price">{cart.discont}</span>
          <span className="sale-info__promo">{cart.price}</span>
          <span className="sale-info__is-have">{cart.isHave ? "в наличие" : "под заказ"}</span>
        </div>
        <ButtonCart />
      </div>


    </li>
  );
};
export default Cart;