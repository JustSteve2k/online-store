import React, { useState } from "react";

import { LoggedInContext } from "./LoggedInContext";

// export const LoggedInContext = React.createContext();

export default function LoggedInProvider({ children }) {
  const contextTest = "works!";
  const [currentUser, setCurrentUser] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (user, pass) => {
    console.log(`${user} - is the username`);
    console.log(`${pass} - is the username`);

    setCurrentUser(user);
    setIsLoggedIn((prev) => !prev);

    if (user === "admin" && pass === "admin") setIsAdmin((prev) => !prev);
  };

  const logOutHandler = () => {
    setIsLoggedIn(false);
    setIsAdmin(false);
  };

  return <LoggedInContext.Provider value={{ contextTest, currentUser, isAdmin, isLoggedIn, loginHandler, logOutHandler }}>{children}</LoggedInContext.Provider>;
}
