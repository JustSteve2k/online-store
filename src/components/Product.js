import React, { useState } from "react";

import "./Product.css";

export default function Product(props) {
  const [amount, setAmount] = useState(1);

  const clickHandler = () => {
    let item = props.item;
    let id = props.id;
    let cost = props.cost;
    props.cartHandler(item, id, amount, cost);
  };

  const amountHandler = (event) => {
    setAmount(() => {
      return parseInt(event.target.value);
    });
  };

  return (
    <div className="product">
      <div className="productImage">Product Image</div>
      <div>{props.item}</div>
      <div>${props.cost}</div>
      <button className="productButton" onClick={clickHandler}>
        Add to Cart
      </button>
      <input type="number" className="w-16 m-auto text-center" value={amount} onChange={amountHandler}></input>
    </div>
  );
}
