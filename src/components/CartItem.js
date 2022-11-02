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
      <div onClick={clickHandler} className="hover:border-2 hover:bg-slate-500 border-solid border-black w-48 m-auto border-1">
        {props.amount} ea - {props.item} - ${(props.amount * props.cost).toFixed(2)}
        <button onClick={clickHandler} className="w-4 bg-slate-500 m-auto">
          -
        </button>
      </div>
    </li>
  );
}
