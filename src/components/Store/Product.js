import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import productImage from "../../Images/generic-product.jpg";

import "./Product.css";

import ProductContext from "../../context/ProductContext";

export default function Product(props) {
  const [amount, setAmount] = useState(1);

  const productCTX = useContext(ProductContext);

  const clickHandler = () => {
    let order = {
      ...props.element,
      amount,
    };

    productCTX.addProduct(order);
  };

  const amountHandler = (event) => {
    setAmount(() => {
      return parseInt(event.target.value);
    });
  };

  const newPath = "item/" + props.element.id;

  return (
    <div className="product">
      <div className="productImage">
        <img src={productImage} alt="Generic Product" />
      </div>
      <span className="productInfo">
        <div>{props.element.item}</div>
        <div>${props.element.cost}</div>
      </span>
      <button className="productButton" onClick={clickHandler}>
        Add to Cart
      </button>
      <NavLink to={newPath} state={{ id: props.element.id, cost: props.element.cost, item: props.element.item, element: props.element }}>
        third test
      </NavLink>
      <input type="number" className="w-16 m-auto text-center" value={amount} onChange={amountHandler}></input>
    </div>
  );
}
