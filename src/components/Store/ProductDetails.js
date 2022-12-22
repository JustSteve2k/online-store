import React, { useContext } from "react";
import { NavLink, useParams, useLocation } from "react-router-dom";
import { RiHome4Fill } from "react-icons/ri";

import productImage from "../../Images/generic-product.jpg";

// import classes from "./ProductDetails.module.css";

import ProductContext from "../../context/ProductContext";

export default function ProductDetails() {
  // let { productID } = useParams();

  let productCTX = useContext(ProductContext);

  let location = useLocation();
  console.log(location);

  const clickHandler = () => {
    let order = {
      ...location.state.element,
      amount: 1,
    };

    productCTX.addProduct(order);
  };

  return (
    <div className="bg-slate-200 fixed h-screen">
      <div className="  w-10/12 bg-slate-300 flex mx-auto mt-16 relative shadow-xl rounded-xl ">
        <div className="w-1/2  my-auto text-center">
          <img src={productImage} />
        </div>
        <div className="border-l-2 border-solid border-black w-1/2">
          <p className="text-right mr-16 text-3xl font-bold mt-4">{location.state.item}</p>
          <div className="text-right mr-16 mb-4">
            <p>Element ID - {location.state.id}</p>
            <p>Element Cost - ${location.state.cost}</p>
          </div>
          <p className="indent-8 w-5/6 mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, pariatur. Aut, porro quisquam temporibus dolorum autem tempora eligendi. Porro
            placeat deleniti a maiores consequuntur ullam rem sequi ea ratione, possimus illo optio nesciunt velit assumenda debitis aut laboriosam laborum
            inventore voluptates doloremque saepe asperiores aspernatur modi! Odit quibusdam vitae voluptas assumenda blanditiis iusto qui, aperiam ipsa at
            neque maxime, voluptatum dolorem perspiciatis et voluptatibus! Natus numquam unde repudiandae qui reprehenderit rem veniam quas veritatis eius autem
            eos voluptate at voluptas consectetur enim illo dolores libero temporibus officia incidunt vero iste nostrum, repellendus distinctio?
          </p>
          <p className="indent-8 w-5/6 mx-auto mt-4 mb-4">
            Debitis beatae numquam repellendus quam. Commodi quibusdam minima, ipsa autem sunt dolores sapiente facere dicta, doloremque alias et perferendis!
            Similique, reprehenderit dolores corporis doloremque eum nam iure iusto dolor aliquid tempore? Tenetur iste doloribus nostrum vero iusto fuga
            beatae, voluptatum error reiciendis commodi libero! Doloribus blanditiis provident error consequuntur, ut autem perspiciatis facere, assumenda alias
            quidem ipsa accusantium exercitationem perferendis a quam quaerat reprehenderit. Quae, quo voluptatibus minima commodi alias nisi fugit aliquid
            adipisci nihil soluta nulla consectetur voluptatum fugiat maxime sapiente sit ipsam exercitationem voluptatem veniam deserunt! Voluptates odit,
            recusandae, aspernatur necessitatibus iste officia saepe dicta cupiditate, eius placeat dolor ratione omnis ex laboriosam harum accusamus.
          </p>
          <div className="w-5/6 mb-8 mx-auto flex justify-end">
            <button onClick={clickHandler} className="w-48 bg-slate-400 shadow-xl rounded-xl hover:bg-teal-400 transition duration-150">
              Add 1 item to cart
            </button>
          </div>
        </div>
      </div>

      <div className="w-5/6 mx-auto mt-4 flex justify-end">
        <NavLink to="/store" className="btnHome">
          Return to store <RiHome4Fill className="inline text-2xl " />
        </NavLink>
      </div>
    </div>
  );
}
