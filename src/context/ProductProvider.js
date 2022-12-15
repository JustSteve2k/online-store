import React, { useReducer } from "react";

import ProductContext from "./ProductContext";

const defaultCartState = { items: [], totalAmount: 0, totalWTax: 0 };

const cartReducer = (state, action) => {
  // // Note,payload item added looks like
  //     action.item {
  //      id: String,
  //      item: string
  //      cost: number,
  //      categories: String,
  //      }

  switch (action.type) {
    case "ADD_PRODUCT":
      let updatedItems;

      let total;
      total = state.totalAmount + action.item.cost;

      // Finds it in the cart then makes a copy of that item.
      let position = state.items.findIndex((element) => element.id === action.item.id);
      let exCartItem = state.items[position];

      // If it is already in the cart.
      // if exCartItem is a definable item.
      if (exCartItem) {
        console.log(`yep its already inside the cart at spot ${position} - for Modal Cart`);

        const updatedItem = {
          ...exCartItem,
          count: exCartItem.count + 1,
        };

        updatedItems = [...state.items];
        updatedItems[position] = updatedItem;
      }

      // if not in the cart, add it
      // if exCartItem is undefined
      if (!exCartItem) {
        console.log(`Adding new product to context with an id of ${action.item.id}`);

        let newItem = {
          ...action.item,
          count: 1,
        };

        updatedItems = [...state.items, newItem];
      }

      // console.log(action.item);
      total = total.toFixed(2);
      total = parseFloat(total);

      let finalAmt = (total * 1.08).toFixed(2);
      finalAmt = parseFloat(finalAmt);

      // console.log(`Final amount is ${finalAmt}`);

      return {
        items: updatedItems,
        totalAmount: total,
        totalWTax: finalAmt,
      };

    case "REMOVE_PRODUCT":
      console.log("Removing a product from context");
      return state;

    default:
      return state;
  }
};

export default function ProductProvider({ children }) {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addProductHandler = (item) => {
    // console.log("This will add a new product");
    dispatchCartAction({ type: "ADD_PRODUCT", item: item });
  };

  const removeProductHandler = () => {
    // console.log("this will remove a product");
    dispatchCartAction({ type: "REMOVE_PRODUCT" });
  };

  const productContext = {
    TEST_PRODUCT: "Testproductworks!",
    items: cartState.items,
    // ==== test items ====
    // items: [
    //   { id: 1, item: "shirt" },
    //   { id: 2, item: "shoes" },
    //   { id: 3, item: "tie" },
    //   { id: 4, item: "socks" },
    // ],
    totalAmount: cartState.totalAmount,
    totalWTax: cartState.totalWTax,
    addProduct: addProductHandler,
    removeProduct: removeProductHandler,
  };

  return <ProductContext.Provider value={productContext}>{children}</ProductContext.Provider>;
}
