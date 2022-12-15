import React, { useReducer } from "react";

import ProductContext from "./ProductContext";

const defaultCartState = { items: [], totalAmount: 0 };

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      console.log("Adding new product");
      return state;

    case "REMOVE_PRODUCT":
      console.log("Removing a product");
      return state;

    default:
      return state;
  }
};

export default function ProductProvider({ children }) {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addProductHandler = () => {
    // console.log("This will add a new product");
    dispatchCartAction({ type: "ADD_PRODUCT" });
  };

  const removeProductHandler = () => {
    // console.log("this will remove a product");
    dispatchCartAction({ type: "REMOVE_PRODUCT" });
  };

  const productContext = {
    TEST_PRODUCT: "Testproductworks!",
    items: [{ id: 1, item: "shirt", id: 2, item: "shoes" }],
    totalAmount: 0,
    addProduct: addProductHandler,
    removeProduct: removeProductHandler,
  };

  return <ProductContext.Provider value={productContext}>{children}</ProductContext.Provider>;
}
