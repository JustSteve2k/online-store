import React, { useState } from "react";

import "./Filter.css";

export default function Filter(props) {
  const filterListHandler = () => {
    console.log(props.filter);
    console.log(findIfActive("Tops"));
  };

  const findIfActive = (button) => {
    return props.filter.includes(button);
  };

  const tops = findIfActive("top");
  const bottoms = findIfActive("bottom");
  const shoes = findIfActive("shoes");
  const accessories = findIfActive("accessory");

  return (
    <div className="filterContainer">
      <h3>Product Filters</h3>
      <button className={tops ? "active" : "inactive"} onClick={() => props.filterHandler("top")}>
        Tops
      </button>
      <button className={bottoms ? "active" : "inactive"} onClick={() => props.filterHandler("bottom")}>
        Bottoms
      </button>
      <button className={shoes ? "active" : "inactive"} onClick={() => props.filterHandler("shoes")}>
        Shoes
      </button>
      <button className={accessories ? "active" : "inactive"} onClick={() => props.filterHandler("accessory")}>
        Accessories
      </button>
      <button onClick={filterListHandler}>Show the current list</button>
    </div>
  );
}
