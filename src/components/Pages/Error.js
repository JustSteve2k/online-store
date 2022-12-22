import React from "react";
import { NavLink } from "react-router-dom";
import { RiHome4Fill } from "react-icons/ri";

export default function Error() {
  return (
    <div className="bg-zinc-200 h-screen fixed w-screen">
      <h2 className="text-center text-3xl p-5">About Us</h2>
      <p className="bg-zinc-300 shadow-xl p-10 mx-auto mt-10 w-5/6 text-lg text-center">
        Not sure how you ended up here, but you're lost! <br/><br/>
        You should head back to the store.
      </p>
      <div className="w-5/6 mx-auto mt-4 flex justify-end">
        <NavLink to="/store" className="p-2 w-48 text-center bg-slate-400 shadow-xl rounded-xl hover:bg-teal-400 transition duration-150">
          Return to store <RiHome4Fill className="inline text-2xl " />
        </NavLink>
      </div>
    </div>
  );
}
