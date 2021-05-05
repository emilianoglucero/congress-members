import React from "react";
import { Link } from "react-router-dom";

export const CongressCard = ({ listOfMembers }) => {
  return (
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
  );
};
