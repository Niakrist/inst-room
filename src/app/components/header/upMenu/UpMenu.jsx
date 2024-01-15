import React from "react";

import "./upMenu.css";

import ButtonHeaderCart from "../../ui/buttons/ButtonHeaderCart";

import logo from "./../../../img/logo.svg";
import heart from "./../../../img/heart.svg";
import barChart from "./../../../img/bar-chart.svg";
import account from "./../../../img/account.svg";
import basket from "./../../../img/basket.svg";

const UpMenu = () => {
  return (
    <div className="menu-up-wrapper">
      <div className="container">
        <div className="up-menu">

          <a href="#!" className="up-menu__logo">
            <img src={logo} alt="logo" />
          </a>

          <div className="up-menu__time-work">Время работы: <span>10:00–20:00</span></div>

          <div className="up-menu__phone">
            <span className="up-menu__phone-phone">+7 495 120-32-14</span>
            <a href="!#" className="up-menu__phone-order-call">Заказать звонок</a>
          </div>

          <div className="cart__wrapper">
            <ButtonHeaderCart img={heart} alt={"Избранное"} />
            <ButtonHeaderCart img={barChart} alt={"Сравнить"} />
            <ButtonHeaderCart img={account} alt={"Аккаунт"} />
            <ButtonHeaderCart img={basket} alt={"Корзина"} />
            <div className="cart__info">
              <div className="cart__info-desc">Товаров на сумму</div>
              <div className="cart__info-sum">2000 Руб</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpMenu;