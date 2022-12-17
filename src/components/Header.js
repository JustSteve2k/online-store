import React, { useContext, useState } from "react";
import "./Header.css";

import { LoggedInContext } from "../context/LoggedInContext";
import ProductContext from "../context/ProductContext";

import { useEffect } from "react";

export default function Header(props) {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const { currentUser, isAdmin, isLoggedIn, logOutHandler } = useContext(LoggedInContext);
  const { items, totalItems } = useContext(ProductContext);

  console.log(`totalItems - ${totalItems}`);

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

  const cartCount = totalItems > 0 ? <span> - {totalItems}</span> : "";

  return (
    <div className="headerMain">
      Logo!
      <div className="links">
        {isAdmin && <button>AdminPanel</button>}
        {isLoggedIn ? <button>{currentUser}</button> : <button onClick={props.showLoginHandler}>Login</button>}
        <button className={cartBtnClasses} onClick={props.showCartHandler}>
          Cart{cartCount}
        </button>
        {isLoggedIn && <button onClick={logOutHandler}>LogOut</button>}
      </div>
    </div>
  );
}
