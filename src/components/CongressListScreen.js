import React from "react";
import { Link } from "react-router-dom";

import "../styles/congress-list-screen.scss";

export const CongressListScreen = ({ listOfMembers }) => {
  console.log(listOfMembers);

  return (
    <div className="App">
      <header>
        <h1>Congress Members</h1>
      </header>
      <main>
        <h3>List of congress persons:</h3>
        <div className="congress-member-card">
          {listOfMembers?.results[0].members.map((person) => (
            <div>
              <p>
                <span>ID: </span>
                {person.id}
              </p>
              <p>
                <span>Title: </span>
                {person.title}
              </p>
              <p>
                <span>First Name: </span>
                {person.first_name}
              </p>
              <p>
                <span>Middle Name: </span>
                {person.middle_name}
              </p>
              <p>
                <span>Last Name: </span>
                {person.last_name}
              </p>
              <p>
                <span>Gender: </span>
                {person.gender}
              </p>
              <p>
                <span>Party: </span>
                {person.party}
              </p>
              <Link to={`./congress/${person.id}`}>Details...</Link>
              <br />
            </div>
          ))}
        </div>
      </main>
      <footer>
        Congress Members © {new Date().getFullYear()}, Built with 💜 by
        {` `}
        <a href="https://www.emilianolucero.ar">Emiliano Lucero</a>
      </footer>
    </div>
  );
};
