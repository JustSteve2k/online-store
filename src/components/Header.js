import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";

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

  const cartCount = <>Cart {totalItems > 0 ? <span> - {totalItems}</span> : ""}</>;

  return (
    <div className="headerMain">
      <NavLink to="/store">
        <img src={logo} alt="logo" />
      </NavLink>
      <div className="links">
        <NavLink to="/store/about" className=" hover:bg-teal-400 transition duration-150">
          About
        </NavLink>
        {isAdmin && <button>AdminPanel</button>}
        {isLoggedIn ? <button>{currentUser}</button> : <button onClick={props.showLoginHandler}>Login</button>}
        <button className={cartBtnClasses} onClick={props.showCartHandler}>
          {cartCount}
        </button>
        {isLoggedIn && <button onClick={logOutHandler}>LogOut</button>}
      </div>
    </div>
  );
}
