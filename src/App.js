import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Store from "./components/Store/Store";
import ProductDetails from "./components/Store/ProductDetails";
import ComboProvider from "./context/ComboProvider";
import AboutUs from "./components/Pages/AboutUs";
import Modal from "./components/Modal/Modal";
import Login from "./components/Login/Login";
import MainLayout from "./components/Layouts/MainLayout";

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

  const errorPage = <div>You found the error page dude.</div>;

  // const passIns = {
  //   showCart: showCart,
  //   showLogin: showLogin,
  //   showCartHandler: showCartHandler,
  //   showLoginHandler: showLoginHandler,
  // };

  return (
    <ComboProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/store"
            element={<MainLayout showCart={showCart} showLogin={showLogin} showCartHandler={showCartHandler} showLoginHandler={showLoginHandler} />}
          >
            <Route index element={<Store />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="/store/item/:productID" element={<ProductDetails />} />
          </Route>
          <Route path="*" element={errorPage} />
        </Routes>
      </BrowserRouter>
      {showCart && <Modal showCartHandler={showCartHandler} />}
      {showLogin && <Login showLoginHandler={showLoginHandler} />}
    </ComboProvider>
  );
}

export default App;
