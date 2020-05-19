import React from "react";
import "./App.css";
import { useLocalStore } from "mobx-react";

export const StoreContext = React.createContext();

export const StoreProvider = ({ children }) => {
  const rootStore = useLocalStore(() => ({
    users: [
      { name: "Rachel", age: 21, class: "FY" },
      { name: "Monica", age: 25, class: "TY" },
      { name: "Phoebe", age: 24, class: "SY" },
      { name: "Joey", age: 15, class: "FY" },
      { name: "Chandler", age: 28, class: "SY" },
      { name: "Ross", age: 29, class: "FY" },
    ],
    addUser: (user) => {
      rootStore.users.push(user);
    },
  }));

  const store = useLocalStore(() => ({
    users: rootStore.users,
    filter: { FY: false, SY: false, TY: false },
    addUser: (user) => {
      rootStore.users.push(user);
    },
    sortUserByName: () => {
      return (store.users = store.users.slice().sort(function (a, b) {
        var aName = a.name.toLowerCase(),
          bName = b.name.toLowerCase();
        if (aName < bName) return -1;
        if (aName > bName) return 1;
        return 0;
      }));
    },
    sortUserByAge: () => {
      return (store.users = store.users.slice().sort(function (a, b) {
        return a.age - b.age;
      }));
    },
    filterUserByClass: (filter) => {
      if (filter.FY === false && filter.SY === false && filter.TY === false) {
        store.users = rootStore.users;
        return;
      }
      store.users = [];
      rootStore.users.map(function (element) {
        if (element.class === "FY" && filter.FY === true) {
          store.users.push(element);
        }
        if (element.class === "SY" && filter.SY === true) {
          store.users.push(element);
        }
        if (element.class === "TY" && filter.TY === true) {
          store.users.push(element);
        }
        return "";
      });
    },
  }));

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
