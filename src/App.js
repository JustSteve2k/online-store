import { useState } from "react";
import Product from "./components/product";
import Cart from "./components/cart";
import "./App.css";

function App() {
  const DUMMY_PRODUCT_LIST = [
    { id: 1, item: "shirt" },
    { id: 2, item: "pants" },
    { id: 3, item: "shorts" },
    { id: 4, item: "hat" },
    { id: 5, item: "socks" },
    { id: 6, item: "shoes" },
    { id: 7, item: "tie" },
    { id: 8, item: "suspenders" },
    { id: 9, item: "bowtie" },
    { id: 10, item: "pipe" },
  ];

  const [products, setProducts] = useState(DUMMY_PRODUCT_LIST);
  const [cart, setCart] = useState([]);

  const cartHandler = (item, id) => {
    console.log(item);
    console.log(id);

    let entry = { item: item, id: id, count: 1 };

    setCart((prev) => {
      return [...prev, entry];
    });
  };

  return (
    <div className="App">
      <div className="container bg-slate-700  ">
        {products.map((element) => (
          <Product key={element.id} id={element.id} item={element.item} cartHandler={cartHandler} />
        ))}
      </div>
      <Cart item={cart} />
    </div>
  );
}

export default App;
