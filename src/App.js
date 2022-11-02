import { useState } from "react";
import Product from "./components/product";
import Cart from "./components/cart";
import "./App.css";

function App() {
  const DUMMY_PRODUCT_LIST = [
    { id: 1, item: "shirt", cost: 19.99 },
    { id: 2, item: "pants", cost: 26.99 },
    { id: 3, item: "shorts", cost: 14.69 },
    { id: 4, item: "hat", cost: 12.99 },
    { id: 5, item: "socks", cost: 6.99 },
    { id: 6, item: "shoes", cost: 49.99 },
    { id: 7, item: "tie", cost: 9.99 },
    { id: 8, item: "suspenders", cost: 12.99 },
    { id: 9, item: "bowtie", cost: 4.99 },
    { id: 10, item: "pipe", cost: 11.99 },
  ];

  const [products, setProducts] = useState(DUMMY_PRODUCT_LIST);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const cartHandler = (item, id, amount, cost) => {
    // console.log(item);
    // console.log(id);
    // console.log(amount);
    // console.log(cost);

    let spot = cart.findIndex((element) => element.id === id);

    if (spot === -1) {
      console.log(`Not found, so adding to the list`);
      let key = Math.floor(Math.random() * 10000000);
      let entry = { item: item, id: id, amount: amount, key: key, cost: cost };
      setCart((prev) => {
        return [...prev, entry];
      });
    } else {
      console.log(`Found at spot ${spot} in the cart`);
      let newcart = [...cart];
      newcart[spot].amount += amount;
      setCart(newcart);
    }
    setTotal((prev) => {
      return (prev += amount * cost);
    });
  };

  const removeItemHandler = (id) => {
    let spot = cart.findIndex((element) => element.id === id);

    let newCart = [...cart];
    newCart[spot].amount -= 1;

    if (newCart[spot].amount <= 0) {
      newCart.splice(spot, 1);
    }

    setCart(newCart);

    setTotal(() => {
      let total = 0;
      newCart.forEach((element) => {
        total += element.cost * element.amount;
      });
      return total;
    });
  };

  const clearCart = () => {
    setCart((prev) => {
      return [];
    });
    setTotal(0);
  };

  return (
    <div className="App">
      <div className="container bg-slate-700  ">
        {products.map((element) => (
          <Product key={element.id} id={element.id} item={element.item} cost={element.cost} cartHandler={cartHandler} />
        ))}
      </div>
      <Cart item={cart} products={products} clearCart={clearCart} total={total} removeItemHandler={removeItemHandler} />
    </div>
  );
}

export default App;
