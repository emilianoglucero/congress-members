import React from "react";
import { Link } from "react-router-dom";

export const CongressGridItems = ({ member }) => {
  return (
    <div>
      <p>
        <span>ID: </span>
        {member.id}
      </p>
      <p>
        <span>Title: </span>
        {member.title}
      </p>
      <p>
        <span>First Name: </span>
        {member.first_name}
      </p>
      <p>
        <span>Middle Name: </span>
        {member.middle_name}
      </p>
      <p>
        <span>Last Name: </span>
        {member.last_name}
      </p>
      <p>
        <span>Gender: </span>
        {member.gender}
      </p>
      <p>
        <span>Party: </span>
        {member.party}
      </p>
      <Link to={`./congress/${member.id}`}>Details...</Link>
      <br />
    </div>
  );
};
