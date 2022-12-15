import React from "react";

export default function ModalCartItem(props) {
  return (
    <div>
      {props.item.count}ea - {props.item.item}
    </div>
  );
}
