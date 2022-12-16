import { useState } from "react";
import Filter from "./Filter";
import Product from "./Product";
import Modal from "../modal/Modal";
import Login from "../Login/Login";

export default function Store(props) {
  const DUMMY_PRODUCT_LIST = [
    { id: 1, item: "shirt", cost: 19.99, categories: "top" },
    { id: 2, item: "pants", cost: 26.99, categories: "bottom" },
    { id: 3, item: "shorts", cost: 14.69, categories: "bottom" },
    { id: 4, item: "hat", cost: 12.99, categories: "accessory" },
    { id: 5, item: "socks", cost: 6.99, categories: "accesory" },
    { id: 6, item: "shoes", cost: 49.99, categories: "shoes" },
    { id: 7, item: "tie", cost: 9.99, categories: "accessory" },
    { id: 8, item: "suspenders", cost: 12.99, categories: "accessory" },
    { id: 9, item: "bowtie", cost: 4.99, categories: "accessory" },
    { id: 10, item: "pipe", cost: 11.99, categories: "accesory" },
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

  return (
    <div className="App">
      <Filter filterHandler={filterHandler} filter={filter} resetFilterHandler={resetFilterHandler} />
      <div className="container bg-slate-800  ">
        {reducedList.map((element) => (
          <Product key={element.id} element={element} />
        ))}
      </div>
      {props.showCart && <Modal showCartHandler={props.showCartHandler} />}
      {props.showLogin && <Login showLoginHandler={props.showLoginHandler} />}
    </div>
  );
}
