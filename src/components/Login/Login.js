import React, { useContext } from "react";
import "./Login.css";

import { LoggedInContext } from "../../context/LoggedInContext";

export default function Login(props) {
  const { loginHandler } = useContext(LoggedInContext);

  let username = "";
  let password = "";

  const confirmHandler = (e) => {
    // console.log(`${username} - is the username`);
    // console.log(`${password} - is the username`);

    if (username != "" && password != "") {
      loginHandler(username, password);
      props.showLoginHandler();
    }
    e.preventDefault();
  };

  const updateUser = (e) => {
    username = e.target.value;
  };

  const updatePass = (e) => {
    password = e.target.value;
  };

  return (
    <div className="loginContainer">
      <button className="loginClose" onClick={props.showLoginHandler}>
        X
      </button>
      <form className="loginForm">
        <label>UserName</label>
        {/* <input type="text" onChange={updateUser} value={username} /> */}
        <input type="text" onChange={updateUser} />
        <label>Password</label>
        <input type="password" onChange={updatePass} />
        <div className="formButtons">
          {/* <button>Clear</button> */}
          <button onClick={confirmHandler}>Ok</button>
        </div>
      </form>
    </div>
  );
}
