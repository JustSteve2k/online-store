import React from "react";

const ProductContext = React.createContext({
  TEST_PRODUCT: "test product default",
  items: [],
  totalItems: 0,
  totalAmount: 0,
  totalWTax: 0,
  addProduct: () => {},
  removeProduct: () => {},
  clearCart: () => {},
  loadCart: () => {},
});

export default ProductContext;
