import React from "react";

const ProductContext = React.createContext({
  TEST_PRODUCT: "test product default",
  items: [],
  totalAmount: 0,
  addProduct: () => {},
  removeProduct: () => {},
});

export default ProductContext;