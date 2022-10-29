import React from "react";

import "./product.css";

export default function Product(props) {
  return (
    <div className="product">
      {props.item}
      <button>Add to Cart</button>
    </div>
  );
}
