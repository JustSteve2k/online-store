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

  const cartHandler = (item, id, amount) => {
    console.log(item);
    console.log(id);
    console.log(amount);

    let spot = cart.findIndex((element) => element.id === id);

    if (spot === -1) {
      console.log(`Not found, so adding to the list`);
      let key = Math.floor(Math.random() * 10000000);
      let entry = { item: item, id: id, amount: amount, key: key };
      setCart((prev) => {
        return [...prev, entry];
      });
    } else {
      console.log(`Found at spot ${spot} in the cart`);
      let newcart = [...cart];
      newcart[spot].amount += amount;
      setCart(newcart);
    }
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
