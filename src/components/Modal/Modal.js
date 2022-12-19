import React, { useContext } from "react";
import "./Modal.css";

import ModalCartItem from "./ModalCartItem";

import ProductContext from "../../context/ProductContext";

// Goal is to eventually make this product more extendable.
export default function Modal(props) {
  const productCTX = useContext(ProductContext);

  let header = <div className="cartHeader">Cart</div>;

  const clearCartHandler = () => {
    productCTX.clearCart();
  };

  let cartStatus = <p className="emptyCart">The cart is empty atm!</p>;

  if (productCTX.items.length > 0) {
    cartStatus = productCTX.items.map((item) => {
      return <ModalCartItem key={item.id} item={item} />;
    });
  }

  let totals = <div></div>;

  if (productCTX.items.length > 0) {
    totals = (
      <div className="totals">
        <h2>The total cost is {productCTX.totalAmount}</h2>
        <h2>Total after tax is ${productCTX.totalWTax}</h2>
      </div>
    );
  }

  const stopProp = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="background" onClick={props.showCartHandler}>
      <div className="modalContainer" onClick={stopProp}>
        <h2>{header}</h2>
        <button className="modalClose" onClick={props.showCartHandler}>
          X
        </button>
        <button className="modalClearCart" onClick={clearCartHandler}>
          ClearCart
        </button>
        <div className={productCTX.items.length > 0 ? "modalInside" : ""}>{cartStatus}</div>
        {totals}
      </div>
    </div>
  );
}
