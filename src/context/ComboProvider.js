import React from "react";

import LoggedInProvider from "./LoggedInProvider";
import ProductProvider from "./ProductProvider";

// This provider puts in all the different providers.

export default function ComboProvider({ children }) {
  return (
    <>
      <ProductProvider>
        <LoggedInProvider>{children}</LoggedInProvider>
      </ProductProvider>
    </>
  );
}
