import React from "react";
import "./Cart.css";
import "./CartItem";
import CartItem from "./CartItem";

export default function Cart(props) {
  const clickHandler = () => {
    console.log(props.item);
  };

  if (props.item.length === 0) {
    return (
      <div className="cartContainer">
        <h1>Cart</h1>
        <h2>Nothing in here yet.</h2>
      </div>
    );
  }

  return (
    <div className="cartContainer flex flex-col">
      <h1>Cart</h1>
      {/* <button onClick={clickHandler}>See whats in the cart</button> */}
      <ul>
        {props.item.map((element) => (
          <CartItem
            key={element.id}
            item={element.item}
            id={element.id}
            amount={element.amount}
            cost={element.cost}
            removeItemHandler={props.removeItemHandler}
          />
        ))}
      </ul>
      <div>Total</div>
      <div>-------</div>
      <div>${props.total.toFixed(2)}</div>
      <button className="w-32 bg-teal-700 m-auto btnClearCart" onClick={props.clearCart}>
        Clear Cart
      </button>
      <button className="w-32 bg-teal-700 m-auto btnShowArray" onClick={clickHandler}>
        Show Array
      </button>
    </div>
  );
}
