import React, { useContext } from "react";
import "./Header.css";

import { LoggedInContext } from "../context/LoggedInContext";

export default function Header(props) {
  // const test = useContext(LoggedInContext);
  const { test, alttest, isAdmin, isLoggedIn } = useContext(LoggedInContext);

  return (
    <div className="headerMain">
      Logo!
      {test}
      {alttest}
      <div className="links">
        {isAdmin && <button>Admin</button>}
        {isLoggedIn ? <button>Account</button> : <button onClick={props.showLoginHandler}>Login</button>}
        <button onClick={props.displayCartHandler}>Cart</button>
      </div>
    </div>
  );
}
