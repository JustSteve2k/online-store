import React, { useContext } from "react";
import { Navigate } from "react-router-dom";

import { LoggedInContext } from "../../context/LoggedInContext";

export default function EditProducts() {
  const loggedInCTX = useContext(LoggedInContext);

  if (!loggedInCTX.isLoggedIn && !loggedInCTX.isAdmin) return <Navigate to="/store" />;

  return (
    <div className="w-full h-screen bg-slate-600 fixed flex justify-evenly">
      <h2 className="fixed text-center text-3xl p-5">Edit products</h2>

      <div className="w-2/6 bg-slate-500 h-4/6 mt-24">
        <form className="flex flex-col items-center">
          <label>Product Description</label>
          <input className="w-4/6 h-32" value="product description"></input>
        </form>
      </div>

      <div className="w-2/6 bg-slate-500 h-4/6 mt-24">
        <form className="flex flex-col items-center">
          <label>Product ID</label>
          <input className="w-4/6 h-8" value="1"></input>
          <label>Item</label>
          <input className="w-4/6 h-8" value="Item"></input>
          <label>Cost</label>
          <input className="w-4/6 h-8" value="Cost"></input>
          <label>Categories</label>
          <input className="w-4/6 h-8" value="categories"></input>
          <label>Image Url</label>
          <input className="w-4/6 h-8" value="imgUrl"></input>
          <label>Quantity</label>
          <input className="w-4/6 h-8" value="Quantity"></input>
        </form>
      </div>
    </div>
  );
}
