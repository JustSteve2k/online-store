import React from "react";

import "./CartItem.css";

export default function CartItem(props) {
  const clickHandler = () => {
    console.log(`You probably want to remove a ${props.item} with an id of ${props.id}`);
    props.removeItemHandler(props.id);
  };

  if (props.item.length === 0) {
    return <li>Nothing in here yet</li>;
  }

  return (
    <li>
      <div>
        {props.amount} ea - {props.item} - ${(props.amount * props.cost).toFixed(2)}
        <button className="btnRemoveItem" onClick={clickHandler}>
          -
        </button>
      </div>
    </li>
  );
}
