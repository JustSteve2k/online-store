import React from "react";

export default function CartItem(props) {
  if (props.item.length === 0) {
    return <li>Nothing in here yet</li>;
  }

  return (
    <li>
      {props.amount}ea - {props.item}
    </li>
  );
}
