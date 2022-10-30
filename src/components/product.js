import React from "react";

import "./product.css";

export default function Product(props) {
  const clickHandler = () => {
    let item = props.item;
    let id = props.id;

    props.cartHandler(item, id);
  };

  return (
    <div className="product">
      {props.item}
      <button onClick={clickHandler}>Add to Cart</button>
    </div>
  );
}
