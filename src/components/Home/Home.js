import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./Home.module.css";

import { useTitleSetter } from "../../Utilities/Utilities";
import Data from "../../Data";

export default function Home() {

  useTitleSetter(Data.homeTitle);

  const entryVerbage = Data.homeScreenGreeting;

  return (
    <div className={classes.homeBackground}>
      <NavLink to="store">
        <h1 className={classes.slogan}>{entryVerbage}</h1>
      </NavLink>
    </div>
  );
}
