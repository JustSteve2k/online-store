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
    <div className="product flex flex-col justify-center bg-slate-700 w-96 h-96 my-2 mx-auto shadow-xl border-black border-solid border-2">
      <div className="productImage h-60 border-black border-solid border-b-2 ">
        <img src={productImage} alt="Generic Product" />
      </div>
      <span className="productInfo mt-2 text-white ">
        <NavLink to={newPath} state={{ id: props.element.id, cost: props.element.cost, item: props.element.item, element: props.element }}>
          <div>{props.element.item}</div>
        </NavLink>
        <div>${props.element.cost}</div>
      </span>
      <button className="w-48 bg-slate-400 p-1 rounded-xl hover:bg-teal-400 hover:rounded-xl transition duration-150 mx-auto mt-2" onClick={clickHandler}>
        Add to Cart
      </button>

      <input type="number" className="w-16 m-auto text-center" value={amount} onChange={amountHandler}></input>
    </div>
  );
}
