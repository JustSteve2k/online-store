import { useState } from "react";
import Filter from "./components/Filter";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Header from "./components/Header";
import "./App.css";

function App() {
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

  const [products, setProducts] = useState(DUMMY_PRODUCT_LIST);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [filter, setFilter] = useState([]);

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

  // let reducedList = products.filter((element) => filter.includes(element.categories));

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
    <>
      <Header />
      <div className="App">
        <Filter filterHandler={filterHandler} filter={filter} />
        <div className="container bg-slate-700  ">
          {products.map((element) => (
            <Product key={element.id} id={element.id} item={element.item} cost={element.cost} cartHandler={cartHandler} />
          ))}
          {/* {reducedList.map((element) => (
          <Product key={element.id} id={element.id} item={element.item} cost={element.cost} cartHandler={cartHandler} />
        ))} */}
        </div>
        <Cart item={cart} products={products} clearCart={clearCart} total={total} removeItemHandler={removeItemHandler} />
      </div>
    </>
  );
}

export default App;
