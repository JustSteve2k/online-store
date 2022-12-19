import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./Home.module.css";

export default function Home() {
  const entryVerbage = "Come find your next purchase.";

  return (
    <div className={classes.homeBackground}>
      <NavLink to="store">
        <h1 className={classes.slogan}>{entryVerbage}</h1>
      </NavLink>
    </div>
  );
}
