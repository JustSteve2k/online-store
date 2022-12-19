import { useState } from "react";

import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import Home from "./components/Home/Home";
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

  const store = (
    <div>
      {" "}
      <Header showCartHandler={showCartHandler} showLoginHandler={showLoginHandler} />
      <Store showCart={showCart} showLogin={showLogin} showCartHandler={showCartHandler} showLoginHandler={showLoginHandler} />
    </div>
  );

  return (
    <ComboProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={store} />
        </Routes>
      </BrowserRouter>
    </ComboProvider>
  );
}

export default App;
