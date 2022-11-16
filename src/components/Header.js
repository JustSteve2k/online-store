import React, { useContext } from "react";
import "./Header.css";

import { LoggedInContext } from "../context/LoggedInContext";

export default function Header() {
  const test = useContext(LoggedInContext);

  return (
    <div className="headerMain">
      Logo!
      {test}
      <div className="links">
        <button>Admin</button>
        <button>Account</button>
        <button>Cart</button>
      </div>
    </div>
  );
}
