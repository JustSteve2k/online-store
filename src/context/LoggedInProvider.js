import React, { useState } from "react";

import { LoggedInContext } from "./LoggedInContext";

import Data from "../Data";

export default function LoggedInProvider({ children }) {
  const contextTest = "works!";
  const [currentUser, setCurrentUser] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (user, pass) => {
    Data.verboseMode && console.log(`${user} - is the username`);
    Data.verboseMode && console.log(`${pass} - is the username`);

    setCurrentUser(user);
    setIsLoggedIn((prev) => !prev);

    if (user === "admin" && pass === "admin") setIsAdmin((prev) => !prev);
  };

  const logOutHandler = () => {
    setIsLoggedIn(false);
    setIsAdmin(false);
  };

  return (
    <LoggedInContext.Provider
      value={{
        contextTest,
        currentUser,
        isAdmin,
        isLoggedIn,
        loginHandler,
        logOutHandler,
      }}
    >
      {children}
    </LoggedInContext.Provider>
  );
}
