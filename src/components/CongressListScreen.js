import React from "react";

import { CongressGrid } from "./ui/CongressGrid";
import "../styles/congress-list-screen.scss";

export const CongressListScreen = ({ listOfMembers }) => {
  return (
    <div className="App">
      <header>
        <h1>Congress Members</h1>
      </header>
      <main>
        <h3>List of congress persons:</h3>
        <CongressGrid listOfMembers={listOfMembers?.results[0].members} />
      </main>
    </div>
  );
};
