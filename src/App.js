import { useState } from "react";
import Header from "./components/Header";
import Store from "./components/Store/Store";
import ComboProvider from "./context/ComboProvider";

import "./App.css";

function App() {
  const [showCart, setShowCart] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const showCartHandler = (e) => {
    // if (e.target !== e.currentTarget) return;

    setShowCart((prev) => !prev);
  };

  const showLoginHandler = () => {
    setShowLogin((prev) => !prev);
  };

  return (
    <ComboProvider>
      <Header showCartHandler={showCartHandler} showLoginHandler={showLoginHandler} />
      <Store showCart={showCart} showLogin={showLogin} showCartHandler={showCartHandler} showLoginHandler={showLoginHandler} />
    </ComboProvider>
  );
}

export default App;
