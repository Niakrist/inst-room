import React from "react";
import "./downMenu.css";
import CatalogButtons from "../../ui/catalog-button/CatalogButtons";

import fb from "./../../../img/fb.svg";
import vk from "./../../../img/vk.svg";
import inst from "./../../../img/inst.svg";
import search from "./../../../img/search.svg"

const DownMenu = () => {
  return (
    <div className="down-menu">
      <div className="container menu-down">
        <CatalogButtons />
        <nav className="menu-nav">
          <ul className="menu-nav__list">
            <li className="menu-nav__item"><a href="#!">О компании</a></li>
            <li className="menu-nav__item"><a href="#!">Акции</a></li>
            <li className="menu-nav__item"><a href="#!">Хиты сезона</a></li>
            <li className="menu-nav__item"><a href="#!">Новинки</a></li>
          </ul>
        </nav>
        <div className="down-menu__soc">
          <a href="#!" className="down-menu__soc-link"><img src={fb} alt="fb" /></a>
          <a href="#!" className="down-menu__soc-link"><img src={vk} alt="vk" /></a>
          <a href="#!" className="down-menu__soc-link"><img src={inst} alt="inst" /></a>
        </div>

        <label className="down-menu__label" htmlFor="">
          <img src={search} alt="search" />
          <input type="text" className="down-menu__search" placeholder="Поиск по каталогу" />
        </label>

      </div>
    </div>
  );
};
export default DownMenu;  