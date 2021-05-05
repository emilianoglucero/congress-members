import React from "react";
import { Link } from "react-router-dom";

export const CongressListScreen = ({ listOfMembers }) => {
  console.log(listOfMembers);

  return (
    <div className="App">
      <header>
        <h1>Congress Members</h1>
      </header>
      <main>
        List of congress persons:
        <div>
          {listOfMembers?.results[0].members.map((person) => (
            <>
              <p>{person.id}</p>
              <p>{person.first_name}</p>
              <p>{person.middle_name}</p>
              <p>{person.last_name}</p>
              <p>{person.gender}</p>
              <p>{person.party}</p>
              <p>{person.title}</p>
              <p>{person.twitter_account}</p>
              <Link to={`./congress/${person.id}`}>Mas...</Link>
              <br />
            </>
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
