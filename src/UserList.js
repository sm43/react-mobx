import React from "react";
import "./App.css";
import { StoreContext } from "./Store.js";
import { useObserver } from "mobx-react";

export const UserList = () => {
  const store = React.useContext(StoreContext);

  return useObserver(() => (
    <div>
      <h2>List of Users: </h2>
      <ul>
        {store.users.map((user) => (
          <li key={user.name}>
            Name: {user.name} &emsp; Age: {user.age} &emsp; Class: {user.class}
          </li>
        ))}
      </ul>
    </div>
  ));
};
