import React from "react";
import { NavLink } from "react-router-dom";
import { RiHome4Fill } from "react-icons/ri";

import { useTitleSetter } from "../../Utilities/Utilities";

import Data from "../../Data";

// import classes from "./AboutUs.module.css";

export default function AboutUs() {

  useTitleSetter(Data.aboutTitle)

  return (
    <div className="bg-zinc-200 h-screen fixed">
      <h2 className="text-center text-3xl p-5">About Us</h2>
      <p className="bg-zinc-300 shadow-xl p-10 mx-auto mt-10 w-5/6 text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem alias molestiae reiciendis a assumenda sint veritatis ea, error mollitia. Molestiae
        porro eius ea dolores ad quia quis ipsa magni, reiciendis eligendi voluptatem accusamus? Debitis similique unde quisquam ex modi molestiae temporibus,
        totam id quos, repellat recusandae commodi dignissimos non nostrum!
      </p>
      <p className="bg-zinc-300 shadow-xl p-10 mx-auto mt-10 w-5/6 text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem alias molestiae reiciendis a assumenda sint veritatis ea, error mollitia. Molestiae
        porro eius ea dolores ad quia quis ipsa magni, reiciendis eligendi voluptatem accusamus? Debitis similique unde quisquam ex modi molestiae temporibus,
        totam id quos, repellat recusandae commodi dignissimos non nostrum!
      </p>
      <div className="w-5/6 mx-auto mt-4 flex justify-end">
        <NavLink to="/store" className="p-2 w-48 text-center bg-slate-400 shadow-xl rounded-xl hover:bg-teal-400 transition duration-150">
          Return to store <RiHome4Fill className="inline text-2xl " />
        </NavLink>
      </div>
    </div>
  );
}
