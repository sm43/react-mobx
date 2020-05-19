import React from "react";
import "./App.css";
import { StoreContext } from "./Store.js";

export const UserFilter = () => {
  const store = React.useContext(StoreContext);
  const arr = { FY: false, SY: false, TY: false };
  return (
    <div>
      <h3>Filter: </h3>
      <div
        onChange={(e) => {
          if (e.target.value === "FY") {
            arr.FY = e.target.checked;
          }
          if (e.target.value === "SY") {
            arr.SY = e.target.checked;
          }
          if (e.target.value === "TY") {
            arr.TY = e.target.checked;
          }
          store.filterUserByClass(arr);
        }}
      >
        <input type="checkbox" defaultChecked={false} value="FY" /> FY
        <input type="checkbox" defaultChecked={false} value="SY" /> SY
        <input type="checkbox" defaultChecked={false} value="TY" /> TY
      </div>
      <div
        onChange={(e) => {
          if (e.target.value === "Name") {
            store.sortUserByName();
          } else if (e.target.value === "Age") {
            store.sortUserByAge();
          }
        }}
      >
        <h3>Sort By:</h3>
        <input type="radio" name="options" value="Name" /> Name
        <input type="radio" name="options" value="Age" /> Age
      </div>
    </div>
  );
};
