import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";

import Modal from "./Modal/Modal";
import Login from "./Login/Login";

import "./Header.css";

import logo from "../Images/logo-sm.png";

import { LoggedInContext } from "../context/LoggedInContext";
import ProductContext from "../context/ProductContext";

import { useEffect } from "react";

export default function Header(props) {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const { currentUser, isAdmin, isLoggedIn, logOutHandler } = useContext(LoggedInContext);
  const { items, totalItems } = useContext(ProductContext);

  const cartBtnClasses = `${btnIsHighlighted ? "bump" : ""} ${totalItems > 0 ? "cartButton" : ""}`;

  useEffect(() => {
    if (items.length === 0) return;
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  // const cartCount = totalItems > 0 ? <span> - {totalItems}</span> : "";
  const cartCount = <>Cart {totalItems > 0 ? <span> - {totalItems}</span> : ""}</>;

  return (
    <div className="headerMain">
      <NavLink to="/store">
        <img src={logo} alt="logo" />
      </NavLink>
      <div className="links">
        <NavLink to="/about">About</NavLink>
        {isAdmin && <button>AdminPanel</button>}
        {isLoggedIn ? <button>{currentUser}</button> : <button onClick={props.showLoginHandler}>Login</button>}
        <button className={cartBtnClasses} onClick={props.showCartHandler}>
          {cartCount}
        </button>
        {isLoggedIn && <button onClick={logOutHandler}>LogOut</button>}
        {/* {props.showCart && <Modal showCartHandler={props.showCartHandler} />}
        {props.showLogin && <Login showLoginHandler={props.showLoginHandler} />} */}
      </div>
    </div>
  );
}
