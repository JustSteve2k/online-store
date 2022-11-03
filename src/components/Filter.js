import React from "react";

import "./Filter.css";

export default function Filter() {
  return (
    <div className="filterContainer">
      <h3>Product Filters</h3>
      <button>Tops</button>
      <button>Bottoms</button>
      <button>Shoes</button>
      <button>Accessories</button>
    </div>
  );
}
