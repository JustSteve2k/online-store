import React from "react";
import "./cart.css";

export default function Cart(props) {
  const clickHandler = () => {
    console.log(props.item);
  };

  const list = () => {
    <ul>
      {props.item.map((element) => (
        <li>element.item</li>
      ))}
    </ul>;
  };

  return (
    <div className="cartContainer">
      <h1>Cart</h1>
      <div>Stuff in your cart</div>
      <button onClick={clickHandler}>See whats in the cart</button>
      {list}
    </div>
  );
}
