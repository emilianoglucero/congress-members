import React from "react";

import "../styles/congress-list-screen.scss";
import { CongressCard } from "./ui/CongressCard";

export const CongressListScreen = ({ listOfMembers }) => {
  console.log(listOfMembers);

  return (
    <div className="App">
      <header>
        <h1>Congress Members</h1>
      </header>
      <main>
        <h3>List of congress persons:</h3>
        <CongressCard listOfMembers={listOfMembers} />
      </main>
    </div>
  );
};
