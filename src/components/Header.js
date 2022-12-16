import React, { useContext } from "react";
import "./Header.css";

import { LoggedInContext } from "../context/LoggedInContext";

export default function Header(props) {
  const { currentUser, isAdmin, isLoggedIn, logOutHandler } = useContext(LoggedInContext);

  return (
    <div className="headerMain">
      Logo!
      <div className="links">
        {isAdmin && <button>AdminPanel</button>}
        {isLoggedIn ? <button>{currentUser}</button> : <button onClick={props.showLoginHandler}>Login</button>}
        <button onClick={props.displayCartHandler}>Cart</button>
        {isLoggedIn && <button onClick={logOutHandler}>LogOut</button>}
      </div>
    </div>
  );
}
