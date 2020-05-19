import React from "react";
import "./App.css";
import SplitPane from "react-split-pane";
import { StoreProvider } from "./Store.js";
import { UserForm } from "./UserForm.js";
import { UserList } from "./UserList.js";
import { UserFilter } from "./UserFilter.js";

function App() {
  return (
    <StoreProvider>
      <main>
        <SplitPane split="vertical" minSize={500}>
          <div>
            <UserForm />
          </div>
          <div>
            <UserFilter />
            <UserList />
          </div>
        </SplitPane>
      </main>
    </StoreProvider>
  );
}

export default App;
