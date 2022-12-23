import { useState } from "react";
import Filter from "./Filter";
import Product from "./Product";
// import Modal from "../Modal/Modal";
// import Login from "../Login/Login";

import "../Store/Store.css";

import { useTitleSetter } from "../../Utilities/Utilities";

import Data, { DUMMY_PRODUCT_LIST } from "../../Data";

export default function Store(props) {
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

  let reducedList = products.filter((element) =>
    filter.includes(element.categories)
  );

  let storeStatus = (
    <div className="emptyMessage">
      <p>There are no products that meet your criteria!</p>
    </div>
  );

  useTitleSetter(Data.storeTitle);

  return (
    <div className="App bg-slate-600">
      <Filter
        filterHandler={filterHandler}
        filter={filter}
        resetFilterHandler={resetFilterHandler}
      />
      <div className="productsContainer rounded-xl shadow-xl">
        {reducedList.map((element) => (
          <Product key={element.id} element={element} />
        ))}
        {reducedList.length === 0 && storeStatus}
      </div>
    </div>
  );
}
