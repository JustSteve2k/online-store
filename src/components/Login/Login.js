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
    <div className="background " onClick={props.showLoginHandler}>
      {/* <div className="background"> */}
      <div className="loginContainer border-2 border-solid border-black h-44 " onClick={stopProp}>
        <button className="absolute -top-2 -right-2 p-3 bg-slate-300 border-solid border-2 font-bold border-black hover:bg-teal-400" onClick={props.showLoginHandler}>
          X
        </button>
        <form className="loginForm">
          <label>UserName</label>
          <input type="text" onChange={updateUser} value={user} className="w-11/12" />
          <label>Password</label>
          <input type="password" onChange={updatePass} value={pass} autoComplete="off" className="w-11/12" />
          <div className="mt-4 flex justify-between w-52">
            <button type="submit" onClick={confirmHandler} className="btnPrimary w-24">
              Ok
            </button>
            <button type="button" onClick={clearEntries} className="btnPrimary w-24">
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
