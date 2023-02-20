import React, { useState, useEffect } from "react";
import Filter from "./Filter";
import Product from "./Product";

import { useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import "../Store/Store.css";

import { useTitleSetter } from "../../Utilities/Utilities";

import Data, { DUMMY_PRODUCT_LIST } from "../../Data";

export default function Store(props) {
  let products = [...DUMMY_PRODUCT_LIST];

  const [filter, setFilter] = useState(["top", "bottom", "shoes", "accessory"]);

  const getProducts = async () => {
    let temp = await fetch("http://localhost:5000/products/all", { method: "GET" })
      .then((resp) => {
        if (!resp.ok) {
          throw Error("There was an issue.");
        }
        return resp.json();
      })
      .then((data) => data.response);

    return temp;
  };

  const query = useQuery("products", getProducts);

  useTitleSetter(Data.storeTitle);

  let reducedList = "";

  if (query.isLoading) {
    reducedList = products.filter((element) => filter.includes(element.categories));
  }

  if (query.isError) return "Error fetching items";

  if (query.isFetched) {
    reducedList = query.data.filter((element) => filter.includes(element.categories));
  }

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

  // let reducedList = products.filter((element) => filter.includes(element.categories));
  // let reducedList = query.data.filter((element) => filter.includes(element.categories));

  let storeStatus = (
    <div className="emptyMessage">
      <p>There are no products that meet your criteria!</p>
    </div>
  );

  return (
    <div className="App bg-slate-600">
      <ReactQueryDevtools />
      <Filter filterHandler={filterHandler} filter={filter} resetFilterHandler={resetFilterHandler} />
      <div className="productsContainer rounded-xl shadow-xl">
        {reducedList.map((element) => (
          <Product key={element.id} element={element} />
        ))}
        {reducedList.length === 0 && storeStatus}
      </div>
    </div>
  );
}
