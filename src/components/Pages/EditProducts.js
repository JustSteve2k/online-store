import React, { useContext, useState } from "react";

import { LoggedInContext } from "../../context/LoggedInContext";

export default function EditProducts() {
  const loggedInCTX = useContext(LoggedInContext);

  const [id, setId] = useState(1);
  const [item, setItem] = useState("");
  const [cost, setCost] = useState(0.0);
  const [categories, setCategories] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("");

  // if (!loggedInCTX.isLoggedIn && !loggedInCTX.isAdmin) return <Navigate to="/store" />;

  const retrieveHandler = async () => {
    // alert("Retrieve button works!");

    // const response = await fetch("http://localhost:5000/main", { method: "GET", mode: "no-cors" });
    // const data = await response.json();

    let address = "http://localhost:5000/products?id=" + id;
    console.log(address);

    // address = address + id;
    // console.log(address);

    await fetch(address, { method: "GET", mode: "cors" })
      .then((resp) => {
        if (!resp.ok) {
          throw Error(`Server error: [${resp.status}] [${resp.statusText}] [${resp.url}]`);
        }
        return resp.json();
      })
      .then((data) => {
        console.log(data);
        setCost(data.cost);
        setItem(data.item);
        setCategories(data.categories);
        setImgUrl(data.imgUrl);
        setQuantity(data.quantity);
        setDescription(data.description);
      })
      .catch((err) => console.log(err));

    // gather id
    // Fetch with that info
    // Update fields
    // Message if unsuccessful
  };

  const postHandler = async () => {
    alert("Post button works!");

    // let testBody = { id: 8, item: "test8", cost: 12.99, categories: "top", imgUrl: "www.test.com", quantity: 10, description: "description" };
    let testBody = { id: id, item: item, cost: cost, categories: categories, imgUrl: imgUrl, quantity: quantity, description: description };
    // let testBody = {{ id, item, cost, categories, imgUrl, quantity, description }};  // Object destructuring , doesn't work yet, needs modification.

    await fetch("http://localhost:5000/products", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(testBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        if (!resp.ok) {
          throw Error(`Server error: [${resp.status}] [${resp.statusText}] [${resp.url}]`);
        }
        return resp.json();
      })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));

    // gather all info
    // No req sent if item, id are blank.
    // Post req with that info.
    // Message if succeeded or failed.
  };

  const updateHandler = async () => {
    alert("Update button works!");

    let testBody = { id: 8, item: "test8upda", cost: 12.99, categories: "top", imgUrl: "www.test.com", quantity: 10, description: "description" };

    await fetch("http://localhost:5000/products?id=8", {
      method: "PATCH",
      mode: "cors",
      body: JSON.stringify(testBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        if (!resp.ok) {
          throw Error(`Server error: [${resp.status}] [${resp.statusText}] [${resp.url}]`);
        }
        return resp.json();
      })
      .then((data) => {
        console.log(data);
        alert(data.response);
      })
      .catch((err) => console.log(err));

    // gather all info
    // Update req with that info.
    // Message if succeeded or failed.
  };

  const deleteHandler = async () => {
    let address = "http://localhost:5000/products?id=" + id;
    console.log(address);

    await fetch(address, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        if (!resp.ok) {
          throw Error(`Server error: [${resp.status}] [${resp.statusText}] [${resp.url}]`);
        }
        return resp.json();
      })
      .then((data) => {
        console.log(data);
        alert(data.response);
      })
      .catch((err) => console.log(err));

    console.log(id);
    // gather id
    // Delete item
    // Clear all fields
    // Message if succeeded or failed.
  };

  const setIdHandler = (e) => setId(e.target.value);
  const setItemHandler = (e) => setItem(e.target.value);
  const setCostHandler = (e) => setCost(e.target.value);
  const setCategoriesHandler = (e) => setCategories(e.target.value);
  const setImgUrlHandler = (e) => setImgUrl(e.target.value);
  const setQuantityHandler = (e) => setQuantity(e.target.value);
  const setDescriptionHandler = (e) => setDescription(e.target.value);

  const getInfoHandler = () => {
    console.clear();
    console.log(`ID - ${id}`);
    console.log(`Item - ${item}`);
    console.log(`Cost - ${cost}`);
    console.log(`Categories - ${categories}`);
    console.log(`ImgUrl - ${imgUrl}`);
    console.log(`Quantity - ${quantity}`);
    console.log(`Description - ${description}`);
  };

  const clearFormHandler = () => {
    setId(1);
    setItem("");
    setCost(0.0);
    setCategories("");
    setImgUrl("");
    setQuantity(0);
    setDescription("");
  };

  const lorem =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software.";

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
            <textarea onChange={setDescriptionHandler} className="w-full h-60 p-4 " placeholder={lorem} value={description} />
          </form>
        </div>
      </div>

      {/* Right Box */}
      <div className="flex justify-center shadow-md w-2/6 h-4/6 bg-zinc-300 mt-24 ">
        <form className="w-5/6 flex flex-col justify-center">
          <label className="ml-2">Product ID</label>
          <input onChange={setIdHandler} type="number" className="w-full h-12 pl-4" placeholder="1" value={id} />
          <label className="mt-4 ml-2 ">Item</label>
          <input onChange={setItemHandler} type="text" className="w-full h-12 pl-4" placeholder="Item" value={item} />
          <label className="mt-4 ml-2">Cost</label>
          <input onChange={setCostHandler} type="number" className="w-full h-12 pl-4" placeholder="Cost" value={cost} />
          <label className="mt-4 ml-2">Categories</label>
          <input onChange={setCategoriesHandler} type="text" className="w-full h-12 pl-4" placeholder="categories" value={categories} />
          <label className="mt-4 ml-2">Image Url</label>
          <input onChange={setImgUrlHandler} type="text" className="w-full h-12 pl-4" placeholder="imgUrl" value={imgUrl} />
          <label className="mt-4 ml-2">Quantity</label>
          <input onChange={setQuantityHandler} type="number" className="w-full h-12 pl-4" placeholder="Quantity" value={quantity} />
        </form>
      </div>

      <div className="flex flex-col justify-center items-center fixed right-16 mt-24 w-36 bg-zinc-300 ">
        <button onClick={retrieveHandler} className="w-5/6 h-8 mt-4 bg-red-400 shadow-md hover:bg-red-800">
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
        <button onClick={getInfoHandler} className="w-5/6 h-8 mt-4 bg-red-400 shadow-md hover:bg-red-800">
          Get Info
        </button>
        <button onClick={clearFormHandler} className="w-5/6 h-8 mt-4 mb-4 bg-red-400 shadow-md hover:bg-red-800">
          Clear Board
        </button>
      </div>
    </div>
  );
}
