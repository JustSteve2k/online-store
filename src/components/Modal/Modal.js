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

  let cartStatus = (
    <p className="emptyCart text-center">The cart is empty atm!</p>
  );

  if (productCTX.items.length > 0) {
    cartStatus = productCTX.items.map((item) => {
      return <ModalCartItem key={item.id} item={item} />;
    });
  }

  let totals = <div></div>;

  if (productCTX.items.length > 0) {
    totals = (
      <div className="totals">
        <h2>
          The total cost is ${parseFloat(productCTX.totalAmount).toFixed(2)}
        </h2>
        <h2>
          Total after tax is ${parseFloat(productCTX.totalWTax).toFixed(2)}
        </h2>
      </div>
    );
  }

  const stopProp = (e) => {
    e.stopPropagation();
  };

  const loadSavedCart = () => {
    productCTX.loadCart();
  };

  return (
    <div className="background" onClick={props.showCartHandler}>
      <div className="modalContainer" onClick={stopProp}>
        <h2>{header}</h2>
        <button
          className="absolute -top-2 -right-2 p-3 bg-slate-300 border-solid border-2 font-bold border-black hover:bg-teal-400"
          onClick={props.showCartHandler}
        >
          X
        </button>
        {productCTX.items.length > 0 && (
          <button
            className="modalClearCart btnPrimary"
            onClick={clearCartHandler}
          >
            ClearCart
          </button>
        )}
        {productCTX.items.length === 0 && (
          <button
            className="btnPrimary w-24 absolute bottom-2 right-2"
            onClick={loadSavedCart}
          >
            LoadCart
          </button>
        )}
        <div className={productCTX.items.length > 0 ? "modalInside" : ""}>
          {cartStatus}
        </div>
        {totals}
      </div>
    </div>
  );
}
