import React, { useContext } from "react";
import "./Header.css";

import { LoggedInContext } from "../context/LoggedInContext";

export default function Header(props) {
  const test = useContext(LoggedInContext);

  return (
    <div className="headerMain">
      Logo!
      {test}
      <div className="links">
        <button>Admin</button>
        <button>Account</button>
        <button onClick={props.showCartHandler}>Cart</button>
      </div>
    </div>
  );
}
