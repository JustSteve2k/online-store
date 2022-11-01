import React from "react";

import "./product.css";

export default function Product(props) {
  const clickHandler = () => {
    let item = props.item;
    let id = props.id;
    let amount = 1;
    let cost = props.cost;
    props.cartHandler(item, id, amount, cost);
  };

  return (
    <div className="product">
      <div>Product Image</div>
      <div>{props.item}</div>
      <div>${props.cost}</div>
      <button className="productButton" onClick={clickHandler}>
        Add to Cart
      </button>
    </div>
  );
}
