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

  const tops = findIfActive("Tops");
  const bottoms = findIfActive("Bottoms");
  const shoes = findIfActive("Shoes");
  const accessories = findIfActive("Accessories");

  return (
    <div className="filterContainer">
      <h3>Product Filters</h3>
      <button className={tops ? "active" : "inactive"} onClick={() => props.filterHandler("Tops")}>
        Tops
      </button>
      <button className={bottoms ? "active" : "inactive"} onClick={() => props.filterHandler("Bottoms")}>
        Bottoms
      </button>
      <button className={shoes ? "active" : "inactive"} onClick={() => props.filterHandler("Shoes")}>
        Shoes
      </button>
      <button className={accessories ? "active" : "inactive"} onClick={() => props.filterHandler("Accessories")}>
        Accessories
      </button>
      <button onClick={filterListHandler}>Show the current list</button>
    </div>
  );
}
