import React from "react";
import "./Login.css";

export default function Login() {
  return (
    <div className="loginContainer">
      <button className="loginClose">X</button>
      <form className="loginForm">
        <label>UserName</label>
        <input type="text" />
        <label>Password</label>
        <input type="text" />
        <div className="formButtons">
          <button>Clear</button>
          <button>Ok</button>
        </div>
      </form>
    </div>
  );
}
