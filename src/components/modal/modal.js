import React, { useContext } from "react";
import "./modal.css";

import ModalCartItem from "./ModalCartItem";

import ProductContext from "../../context/ProductContext";

export default function Modal(props) {
  const productCTX = useContext(ProductContext);

  // id={item.id} count={item.count} item={item.item}

  console.log(`The new final amount is ${productCTX.totalWTax}`);

  return (
    <div className="modalContainer">
      {/* MODAL */}
      <h2>Cart</h2>
      <button className="modalClose" onClick={props.displayCartHandler}>
        X
      </button>
      <div className="modalInside">
        {productCTX.items.map((item) => {
          return <ModalCartItem key={item.id} item={item} />;
        })}
      </div>
      <h2>The total cost is {productCTX.totalAmount}</h2>
      <h2>Total after tax is ${productCTX.totalWTax}</h2>
    </div>
  );
}
