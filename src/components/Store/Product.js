import React, { useContext, useState } from "react";
import productImage from "../../Images/generic-product.jpg";

import "./Product.css";

import ProductContext from "../../context/ProductContext";

export default function Product(props) {
  const [amount, setAmount] = useState(1);

  const productCTX = useContext(ProductContext);

  const clickHandler = () => {
    productCTX.addProduct(props.element);
  };

  const amountHandler = (event) => {
    setAmount(() => {
      return parseInt(event.target.value);
    });
  };

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
      <input type="number" className="w-16 m-auto text-center" value={amount} onChange={amountHandler}></input>
    </div>
  );
}
