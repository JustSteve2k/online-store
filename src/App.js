import { useState } from "react";
import Product from "./components/product";
import "./App.css";

function App() {
  const DUMMY_PRODUCT_LIST = [
    { id: 1, item: "shirt" },
    { id: 2, item: "pants" },
    { id: 3, item: "shorts" },
    { id: 4, item: "hat" },
    { id: 5, item: "socks" },
    { id: 6, item: "shoes" },
  ];

  // const [products, setProducts] = useState(DUMMY_PRODUCT_LIST);

  return (
    <div className="App">
      <div className="container bg-slate-700  ">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}

export default App;
