import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../Header";

export default function MainLayout(props) {
  return (
    <div>
      <Header showCart={props.showCart} showLogin={props.showLogin} showCartHandler={props.showCartHandler} showLoginHandler={props.showLoginHandler} />
      <Outlet />
    </div>
  );
}
