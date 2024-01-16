import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Cart from "../cart/Cart.jsx";
import { getApi } from "./../../../API/products.js"
import "./carts-list.css";

const CartsList = () => {

  const [carts, setcarts] = useState('')

  useEffect(() => {
    const data = getApi();
    setcarts(data)
  }, [])


  console.log('carts', carts)

  return (<div className="container">
    <h2 className="carts-list__title">Популярные товары</h2>
    <ul className="carts-list">

      {carts && carts.map(cart => (
        <Cart key={cart._id} {...cart} />
      ))}


    </ul>
  </div>);
};
export default CartsList;