import React from "react";
import "./cart.css";
import "./CartItem";
import CartItem from "./CartItem";

export default function Cart(props) {
  const clickHandler = () => {
    console.log(props.item);
  };

  // const test = <p>TEST HELLO COMPONENT</p>;

  if (props.item.length === 0) {
    return (
      <div className="cartContainer">
        <h1>Cart</h1>
        <h2>Nothing in here yet.</h2>
      </div>
    );
  }

  return (
    <div className="cartContainer">
      <h1>Cart</h1>
      {/* <button onClick={clickHandler}>See whats in the cart</button> */}
      <ul>
        {props.item.map((element) => (
          <CartItem key={element.id} item={element.item} amount={element.amount} />
        ))}
      </ul>
    </div>
  );
}
