import React from "react";

const ProductContext = React.createContext({
  TEST_PRODUCT: "test product default",
  items: [],
  totalAmount: 0,
  totalWTax: 0,
  addProduct: () => {},
  removeProduct: () => {},
  clearCart: () => {},
});

export default ProductContext;
