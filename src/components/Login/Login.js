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
    }
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

  const stopProp = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="background" onClick={props.showLoginHandler}>
      {/* <div className="background"> */}
      <div className="loginContainer" onClick={stopProp}>
        <button className="loginClose" onClick={props.showLoginHandler}>
          X
        </button>
        <form className="loginForm">
          <label>UserName</label>
          <input type="text" onChange={updateUser} value={user} />
          <label>Password</label>
          <input type="password" onChange={updatePass} value={pass} autoComplete="off" />
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
    </div>
  );
}
