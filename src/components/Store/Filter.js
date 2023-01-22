import React from "react";

import Config from "../../Config";

import style from "./Filter.module.css";

export default function Filter(props) {
  const filterListHandler = () => {
    console.log(props.filter);
    console.log(findIfActive("Tops"));
  };

  const findIfActive = (button) => {
    return props.filter.includes(button);
  };

  const findIfAll = (array) => {
    if (array.length === 4) return true;
    else return false;
  };

  const all = findIfAll(props.filter);
  const tops = findIfActive("top");
  const bottoms = findIfActive("bottom");
  const shoes = findIfActive("shoes");
  const accessories = findIfActive("accessory");

  return (
    <div className={style.filterContainer + " bg-slate-800"}>
      <h3>Product Filters</h3>
      <button className={all ? style.active : style.inactive} onClick={() => props.resetFilterHandler()}>
        All
      </button>
      <button className={tops ? style.active : style.inactive} onClick={() => props.filterHandler("top")}>
        Tops
      </button>
      <button className={bottoms ? style.active : style.inactive} onClick={() => props.filterHandler("bottom")}>
        Bottoms
      </button>
      <button className={shoes ? style.active : style.inactive} onClick={() => props.filterHandler("shoes")}>
        Shoes
      </button>
      <button className={accessories ? style.active : style.inactive} onClick={() => props.filterHandler("accessory")}>
        Accessories
      </button>
      {Config.devMode && (
        <button className="w-2 p-1 bg-slate-400 hover:bg-teal-400 transition duration-150" onClick={filterListHandler}>
          Show the current list (DEV)
        </button>
      )}
    </div>
  );
}
