import React, { useContext } from "react";
import "./Header.css";

import { LoggedInContext } from "../context/LoggedInContext";
// import { ProductContext } from "../context/ProductContext";
// import { TestContext } from "../context/TestContext";

export default function Header(props) {
  // const { contextTest, currentUser, isAdmin, isLoggedIn, logOutHandler } = useContext(LoggedInContext);
  const { currentUser, isAdmin, isLoggedIn, logOutHandler } = useContext(LoggedInContext);
  const logCTX = useContext(LoggedInContext);
  // const productCTX = useContext(ProductContext);

  return (
    <div className="headerMain">
      Logo!
      {logCTX.contextTest}
      <div className="links">
        {isAdmin && <button>AdminPanel</button>}
        {isLoggedIn ? <button>{currentUser}</button> : <button onClick={props.showLoginHandler}>Login</button>}
        <button onClick={props.displayCartHandler}>Cart</button>
        {isLoggedIn && <button onClick={logOutHandler}>LogOut</button>}
      </div>
    </div>
  );
}
