import React from "react";
import "./cart.css";
import "./CartItem";
import CartItem from "./CartItem";

export default function Cart(props) {
  const clickHandler = () => {
    console.log(props.item);
  };

  const list = (
    <ul>
      {props.item.map((element) => (
        <li>element.item</li>
      ))}
    </ul>
  );

  const test = <p>TEST HELLO COMPONENT</p>;

  return (
    <div className="cartContainer">
      <h1>Cart</h1>
      <div>Stuff in your cart</div>
      <button onClick={clickHandler}>See whats in the cart</button>
      <ul>
        {props.item.map((element) => (
          <CartItem key={element.id} item={element.item} />
        ))}
      </ul>
    </div>
  );
}
