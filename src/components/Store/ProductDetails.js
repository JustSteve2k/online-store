import React, { useContext } from "react";
import { NavLink, useParams, useLocation } from "react-router-dom";

import classes from "./ProductDetails.module.css";

import Header from "../Header";

import ProductContext from "../../context/ProductContext";

export default function ProductDetails() {
  let { productID } = useParams();

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
    <div>
      <Header />
      Product Details for product - {productID}
      <div className={classes.productContainer}>
        <div className={classes.productDescription}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, pariatur. Aut, porro quisquam temporibus dolorum autem tempora eligendi. Porro
          placeat deleniti a maiores consequuntur ullam rem sequi ea ratione, possimus illo optio nesciunt velit assumenda debitis aut laboriosam laborum
          inventore voluptates doloremque saepe asperiores aspernatur modi! Odit quibusdam vitae voluptas assumenda blanditiis iusto qui, aperiam ipsa at neque
          maxime, voluptatum dolorem perspiciatis et voluptatibus! Natus numquam unde repudiandae qui reprehenderit rem veniam quas veritatis eius autem eos
          voluptate at voluptas consectetur enim illo dolores libero temporibus officia incidunt vero iste nostrum, repellendus distinctio? Debitis beatae
          numquam repellendus quam. Commodi quibusdam minima, ipsa autem sunt dolores sapiente facere dicta, doloremque alias et perferendis! Similique,
          reprehenderit dolores corporis doloremque eum nam iure iusto dolor aliquid tempore? Tenetur iste doloribus nostrum vero iusto fuga beatae, voluptatum
          error reiciendis commodi libero! Doloribus blanditiis provident error consequuntur, ut autem perspiciatis facere, assumenda alias quidem ipsa
          accusantium exercitationem perferendis a quam quaerat reprehenderit. Quae, quo voluptatibus minima commodi alias nisi fugit aliquid adipisci nihil
          soluta nulla consectetur voluptatum fugiat maxime sapiente sit ipsam exercitationem voluptatem veniam deserunt! Voluptates odit, recusandae,
          aspernatur necessitatibus iste officia saepe dicta cupiditate, eius placeat dolor ratione omnis ex laboriosam harum accusamus.
        </div>
      </div>
      <p>Element ID - {location.state.id}</p>
      <p>Element Item - {location.state.item}</p>
      <p>Element Cost - {location.state.cost}</p>
      <button onClick={clickHandler}>Add 1 item to cart</button>
      <NavLink to="/store">Back to store</NavLink>
    </div>
  );
}
