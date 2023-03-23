import React from "react";
import { useQuery } from "react-query";
import { NavLink } from "react-router-dom";

import classes from "./Home.module.css";

import { useTitleSetter } from "../../Utilities/Utilities";
import Data from "../../Data";

export default function Home() {
  useTitleSetter(Data.homeTitle);

  const entryVerbage = Data.homeScreenGreeting;

  const onlineUrl = "https://jealous-puce-vestments.cyclic.app/main";

  const wakeupService = async () => {
    let info = await fetch(onlineUrl, { method: "GET" })
      .then((resp) => {
        if (!resp.ok) {
          throw Error("There was an issue.");
        }
        return resp.json();
      })
      .then((data) => data.response);

    return info;
  };

  const query = useQuery("wakeup", wakeupService);

  if (query.isFetched) {
    console.log(query.data);
  }

  return (
    <div className={classes.homeBackground}>
      <NavLink to="store">
        <h1 className={classes.slogan}>{entryVerbage}</h1>
      </NavLink>
    </div>
  );
}
