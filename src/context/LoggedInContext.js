import React from "react";

export const LoggedInContext = React.createContext({
  contextTest: "",
  currentUser: "",
  setCurrentUser: () => {},
  isAdmin: () => {},
  isLoggedIn: () => {},
});

// { contextTest, currentUser, isAdmin, isLoggedIn, logOutHandler }
