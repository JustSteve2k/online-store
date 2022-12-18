import React, { useContext } from "react";

import "./ModalCartItem.css";

import ProductContext from "../../context/ProductContext";

export default function ModalCartItem(props) {
  const productCTX = useContext(ProductContext);

  const deleteHandler = (e) => {
    productCTX.removeProduct(props.item);
  };

  return (
    <div className="lineItem">
      <span className="cartEntry">
        {props.item.count} ea - {props.item.item}
      </span>
      <button className="deleteButton" onClick={deleteHandler}>
        Remove
      </button>
    </div>
  );
}
