import React, { useReducer } from "react";

import ProductContext from "./ProductContext";

import Data, { DUMMY_PRODUCT_LIST } from "../Data";

const defaultCartState = { items: [], totalAmount: 0, totalWTax: 0 };

const cartReducer = (state, action) => {
  // // Note,payload item added looks like
  //     action.item {
  //      id: String,
  //      item: string
  //      cost: number,
  //      categories: String,
  //      }

  let updatedItems = [];
  let updatedItem;
  let total;
  let position;
  let exCartItem;
  let finalAmt;
  let save;

  switch (action.type) {
    case "ADD_PRODUCT":
      total = state.totalAmount + action.item.cost;

      // Finds it in the cart then makes a copy of that item.
      position = state.items.findIndex(
        (element) => element.id === action.item.id
      );
      exCartItem = state.items[position];

      // If it is already in the cart.
      // if exCartItem is a definable item.
      if (exCartItem) {
        Data.verboseMode &&
          console.log(
            `yep its already inside the cart at spot ${position} - for Modal Cart`
          );

        updatedItem = {
          ...exCartItem,
          count: exCartItem.count + action.item.amount,
        };

        updatedItems = [...state.items];
        updatedItems[position] = updatedItem;
      }

      // if not in the cart, add it
      // if exCartItem is undefined
      if (!exCartItem) {
        Data.verboseMode &&
          console.log(
            `Adding new product to context with an id of ${action.item.id} of an amount of ${action.item.amount}`
          );

        let newItem = {
          ...action.item,
          count: action.item.amount,
        };

        delete newItem.amount;

        updatedItems = [...state.items, newItem];
      }

      total = parseFloat(total);
      finalAmt = parseFloat(total * 1.08);

      save = { items: updatedItems };

      SaveCartToLocalStorage(save);

      return {
        items: updatedItems,
        totalAmount: total,
        totalWTax: finalAmt,
      };

    case "REMOVE_PRODUCT": {
      console.log("Removing a product from context");
      console.log(action.item);

      // Find position of item in array.

      position = state.items.findIndex(
        (element) => element.id === action.item.id
      );
      exCartItem = state.items[position];

      updatedItem = {
        ...exCartItem,
        count: exCartItem.count - 1,
      };

      updatedItems = [...state.items];
      updatedItems[position] = updatedItem;

      if (updatedItem.count === 0) {
        updatedItems.splice(position, 1);
      }

      // Subtract item cost * amount removed.
      total = state.totalAmount - exCartItem.cost;

      total = total.toFixed(2);
      total = parseFloat(total);

      finalAmt = (total * 1.08).toFixed(2);
      finalAmt = parseFloat(finalAmt);

      save = { items: updatedItems };

      SaveCartToLocalStorage(save);

      return {
        items: updatedItems,
        totalAmount: total,
        totalWTax: finalAmt,
      };
    }

    case "CLEAR_CART": {
      console.log("This will clear the cart.");

      updatedItems = [];
      total = 0;
      finalAmt = 0;

      save = { items: updatedItems };

      SaveCartToLocalStorage(save);

      return {
        items: updatedItems,
        totalAmount: total,
        totalWTax: finalAmt,
      };
    }

    case "LOAD_CART": {
      Data.verboseMode && console.log("loading items from local storage");

      save = JSON.parse(localStorage.getItem("OnlineStore"));
      Data.verboseMode && console.log(save);
      total = 0;

      Object.keys(save.items).forEach((key) => {
        console.log(`Add iding in from cart - ${(key, save.items[key])}`);
        updatedItems.push(save.items[key]);

        // finds location of item in the database.
        let spot = DUMMY_PRODUCT_LIST.findIndex(
          (element) => element.id === save.items[key].id
        );
        console.log(save.items[key].count);
        total = total + save.items[key].count * DUMMY_PRODUCT_LIST[spot].cost;
      });

      total = total.toFixed(2);
      total = parseFloat(total);

      finalAmt = (total * 1.08).toFixed(2);
      finalAmt = parseFloat(finalAmt);

      return {
        items: updatedItems,
        totalAmount: total,
        totalWTax: finalAmt,
      };
    }

    default:
      return state;
  }
};

/*End of Cart Reducer Function */

function SaveCartToLocalStorage(save) {
  let saveString = JSON.stringify(save);
  // console.log(`Saved cart is - ${saveString}`);
  localStorage.setItem("OnlineStore", saveString);

  // Should only be saving the item id and amount in the end, total should be recalculated.
}

export default function ProductProvider({ children }) {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addProductHandler = (item) => {
    // console.log("This will add a new product");
    dispatchCartAction({ type: "ADD_PRODUCT", item: item });
  };

  const removeProductHandler = (item) => {
    // console.log("this will remove a product");
    dispatchCartAction({ type: "REMOVE_PRODUCT", item: item });
  };

  const clearCartHandler = () => {
    dispatchCartAction({ type: "CLEAR_CART" });
  };

  const loadCartFromLS = () => {
    dispatchCartAction({ type: "LOAD_CART" });
  };

  const totalAmountOfItems = () => {
    let total;
    total = cartState.items.reduce(
      (total, element) => total + element.count,
      0
    );

    return total;
  };

  const productContext = {
    TEST_PRODUCT: "Testproductworks!",
    items: cartState.items,
    totalItems: totalAmountOfItems(),
    totalAmount: cartState.totalAmount,
    totalWTax: cartState.totalWTax,
    addProduct: addProductHandler,
    removeProduct: removeProductHandler,
    clearCart: clearCartHandler,
    loadCart: loadCartFromLS,
  };

  return (
    <ProductContext.Provider value={productContext}>
      {children}
    </ProductContext.Provider>
  );
}
