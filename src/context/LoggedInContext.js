import React, { useState } from "react";

export const LoggedInContext = React.createContext();

export default function LoggedInProvider({ children }) {
  const test = "works!";

  return <LoggedInContext.Provider value={test}>{children}</LoggedInContext.Provider>;
}
