import React, { useContext } from "react";
import "./modal.css";

import ModalCartItem from "./ModalCartItem";

import ProductContext from "../../context/ProductContext";

export default function Modal(props) {
  const productCTX = useContext(ProductContext);

  // id={item.id} count={item.count} item={item.item}

  const clearCartHandler = () => {
    productCTX.clearCart();
  };

  console.log(`The new final amount is ${productCTX.totalWTax}`);

  let cartStatus = <p>The cart is empty atm!</p>;

  if (productCTX.items.length > 0) {
    cartStatus = productCTX.items.map((item) => {
      return <ModalCartItem key={item.id} item={item} />;
    });
  }

  let totals = <div></div>;

  if (productCTX.items.length > 0) {
    totals = (
      <div>
        <h2>The total cost is {productCTX.totalAmount}</h2>
        <h2>Total after tax is ${productCTX.totalWTax}</h2>
      </div>
    );
  }

  return (
    <div className="modalContainer">
      {/* MODAL */}
      <h2>Cart</h2>
      <button className="modalClose" onClick={props.displayCartHandler}>
        X
      </button>
      <button className="modalClearCart" onClick={clearCartHandler}>
        ClearCart
      </button>
      <div className={productCTX.items.length > 0 ? "modalInside" : ""}>{cartStatus}</div>
      {totals}
    </div>
  );
}
