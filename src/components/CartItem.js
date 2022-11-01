import React from "react";

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
      <div onClick={clickHandler}>
        {props.amount}ea - {props.item} - ${(props.amount * props.cost).toFixed(2)}
      </div>
      {/* <button onClick={clickHandler}>-</button> */}
    </li>
  );
}
