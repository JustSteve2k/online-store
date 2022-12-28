import React, { useContext } from "react";
import { redirect, Navigate } from "react-router-dom";

import { LoggedInContext } from "../../context/LoggedInContext";

export default function UserProfile() {
  const loggedInCTX = useContext(LoggedInContext);

  //   if (!loggedInCTX.isLoggedIn)
  if (!loggedInCTX.isLoggedIn && !loggedInCTX.isAdmin)
    return <Navigate to="/store" />;

  return (
    <div>
      Admin Page
      <div>
        Is the user logged in still? {loggedInCTX.isLoggedIn ? "yepp" : "nope"}{" "}
      </div>
      <div>Is the user an admin? {loggedInCTX.isAdmin ? "yepp" : "nope"}</div>
    </div>
  );
}
