import React from "react";
import "./modal.css";

export default function modal(props) {
  return (
    <div className="modalContainer">
      MODAL
      <button className="modalClose" onClick={props.hideCartHandler}>
        X
      </button>
    </div>
  );
}
