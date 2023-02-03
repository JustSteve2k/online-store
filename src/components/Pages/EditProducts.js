import React, { useContext } from "react";
import { Navigate } from "react-router-dom";

import { LoggedInContext } from "../../context/LoggedInContext";

export default function EditProducts() {
  const loggedInCTX = useContext(LoggedInContext);

  // if (!loggedInCTX.isLoggedIn && !loggedInCTX.isAdmin) return <Navigate to="/store" />;

  const retrieveHandler = () => {
    alert("Retrieve button works!");
  };

  const postHandler = () => {
    alert("Post button works!");
  };

  const updateHandler = () => {
    alert("Update button works!");
  };

  const deleteHandler = () => {
    alert("Delete button works!");
  };

  const lorem =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

  return (
    <div className="w-full h-screen bg-stone-400 fixed flex justify-center">
      <h2 className="fixed text-center text-3xl p-5">Edit products</h2>

      {/* Left Box */}
      <div className="flex justify-center items-center w-2/6 h-4/6 bg-zinc-300 shadow-md mt-24 ">
        <div className="w-5/6 h-5/6 ">
          <label className="ml-2">Product Image</label>
          <div className="w-full h-52 bg-white "></div>
          <form className="flex flex-col">
            <label className="mt-4 ml-2">Product Description</label>
            <textarea className="w-full h-60 placeholder:p-2 " placeholder={lorem}></textarea>
          </form>
        </div>
      </div>

      {/* Right Box */}
      <div className="flex justify-center shadow-md w-2/6 h-4/6 bg-zinc-300 mt-24 ">
        <form className="w-5/6 flex flex-col justify-center">
          <label className="ml-2">Product ID</label>
          <input className="w-full h-12 placeholder:pl-4" placeholder="1"></input>
          <label className="mt-4 ml-2 ">Item</label>
          <input className="w-full h-12 placeholder:pl-4" placeholder="Item"></input>
          <label className="mt-4 ml-2">Cost</label>
          <input className="w-full h-12 placeholder:pl-4" placeholder="Cost"></input>
          <label className="mt-4 ml-2">Categories</label>
          <input className="w-full h-12 placeholder:pl-4" placeholder="categories"></input>
          <label className="mt-4 ml-2">Image Url</label>
          <input className="w-full h-12 placeholder:pl-4" placeholder="imgUrl"></input>
          <label className="mt-4 ml-2">Quantity</label>
          <input className="w-full h-12 placeholder:pl-4" placeholder="Quantity"></input>
        </form>
      </div>

      <div className="flex flex-col justify-center items-center fixed right-16 mt-24 w-36 h-48 bg-zinc-300 ">
        <button onClick={retrieveHandler} className="w-5/6 h-8 bg-red-400 shadow-md hover:bg-red-800">
          Retrieve
        </button>
        <button onClick={postHandler} className="w-5/6 h-8 mt-4 bg-red-400 shadow-md hover:bg-red-800">
          Post
        </button>
        <button onClick={updateHandler} className="w-5/6 h-8 mt-4 bg-red-400 shadow-md hover:bg-red-800">
          Update
        </button>
        <button onClick={deleteHandler} className="w-5/6 h-8 mt-4 bg-red-400 shadow-md hover:bg-red-800">
          Delete
        </button>
      </div>
    </div>
  );
}
