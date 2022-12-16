import React, { useState, useContext } from "react";
import "./Login.css";

import { LoggedInContext } from "../../context/LoggedInContext";

export default function Login(props) {
  const { loginHandler } = useContext(LoggedInContext);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const confirmHandler = (e) => {
    if (user !== "" && pass !== "") {
      loginHandler(user, pass);
      props.showLoginHandler();
      console.log("if is running!");
    }
    e.preventDefault();

    console.log("finished!");
  };

  const updateUser = (e) => {
    setUser(e.target.value);
  };

  const updatePass = (e) => {
    setPass(e.target.value);
  };

  const clearEntries = (e) => {
    setUser("");
    setPass("");
    e.preventDefault();
  };

  return (
    <div className="loginContainer">
      <button className="loginClose" onClick={props.showLoginHandler}>
        X
      </button>
      <form className="loginForm">
        <label>UserName</label>
        <input type="text" onChange={updateUser} value={user} />
        <label>Password</label>
        <input type="password" onChange={updatePass} value={pass} />
        <div className="formButtons">
          <button type="submit" onClick={confirmHandler}>
            Ok
          </button>
          <button type="button" onClick={clearEntries}>
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}
