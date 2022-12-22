import { useState } from "react";
import Filter from "./Filter";
import Product from "./Product";
import Modal from "../Modal/Modal";
import Login from "../Login/Login";

import "../Store/Store.css";

import { useTitleSetter } from "../../Utilities/Utilities";

import Data from "../../Data"

export default function Store(props) {
  const DUMMY_PRODUCT_LIST = [
    { id: 1, item: "Shirt", cost: 19.99, categories: "top" },
    { id: 2, item: "Pants", cost: 26.99, categories: "bottom" },
    { id: 3, item: "Shorts", cost: 14.69, categories: "bottom" },
    { id: 4, item: "Hat", cost: 12.99, categories: "accessory" },
    { id: 5, item: "Socks", cost: 6.99, categories: "accesory" },
    { id: 6, item: "Shoes", cost: 49.99, categories: "shoes" },
    { id: 7, item: "Tie", cost: 9.99, categories: "accessory" },
    { id: 8, item: "Suspenders", cost: 12.99, categories: "accessory" },
    { id: 9, item: "Bowtie", cost: 4.99, categories: "accessory" },
    { id: 10, item: "Pipe", cost: 11.99, categories: "accesory" },
    { id: 11, item: "Jorts", cost: 18.99, categories: "bottom" },
    { id: 12, item: "Loafers", cost: 63.99, categories: "shoes" },
    { id: 13, item: "Puffer Jacket", cost: 18.99, categories: "top" },
    { id: 14, item: "Fake Mustache", cost: 9.99, categories: "accessory" },
  ];

  //   const [products, setProducts] = useState(DUMMY_PRODUCT_LIST);
  const products = [...DUMMY_PRODUCT_LIST];
  const [filter, setFilter] = useState(["top", "bottom", "shoes", "accessory"]);

  const filterHandler = (button) => {
    let spot = filter.findIndex((element) => element === button);

    if (spot === -1)
      setFilter((prev) => {
        return [...prev, button];
        // if prev doesn't contain button, add it.
      });
    else {
      setFilter((prev) => {
        let newList = [...prev];
        newList.splice(spot, 1);
        return newList;
        // if prev contains button remove it.
      });
    }
  };

  const resetFilterHandler = () => {
    setFilter(["top", "bottom", "shoes", "accessory"]);
  };

  let reducedList = products.filter((element) => filter.includes(element.categories));

  let storeStatus = (
    <div className="emptyMessage">
      <p>There are no products that meet your criteria!</p>
    </div>
  );

  useTitleSetter(Data.storeTitle);

  return (
    <div className="App bg-slate-600">
      <Filter filterHandler={filterHandler} filter={filter} resetFilterHandler={resetFilterHandler} />
      <div className="productsContainer rounded-xl shadow-xl">
        {reducedList.map((element) => (
          <Product key={element.id} element={element} />
        ))}
        {reducedList.length === 0 && storeStatus}
      </div>
      {/* {props.showCart && <Modal showCartHandler={props.showCartHandler} />}
      {props.showLogin && <Login showLoginHandler={props.showLoginHandler} />} */}
    </div>
  );
}
