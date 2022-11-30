import React, { useState } from "react";

export const LoggedInContext = React.createContext();

export default function LoggedInProvider({ children }) {
  const test = "works!";
  const alttest = "alsoworks!";
  const isAdmin = true;
  const isLoggedIn = false;

  return <LoggedInContext.Provider value={{ test, alttest, isAdmin, isLoggedIn }}>{children}</LoggedInContext.Provider>;
}
