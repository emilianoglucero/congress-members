import React from "react";
import "../../styles/member-details.scss";

export const CongressMemberDetails = ({ member }) => {
  return (
    <div className="member-details">
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
      <p>
        <span>Date of Birth: </span>
        {member.date_of_birth}
      </p>
      <p>
        <span>Last Update: </span>
        {member.last_updated}
      </p>
      <p>
        <span>State: </span>
        {member.state}
      </p>
      <p>
        <span>Total Votes: </span>
        {member.total_votes}
      </p>
      <p>
        <span>Missed Votes: </span>
        {member.missed_votes}
      </p>
      <p>
        <span>Missed Votes PCT: </span>
        {member.missed_votes_pct}
      </p>
      <p>
        <span>Votes Against Party PCT: </span>
        {member.votes_against_party_pct}
      </p>
      <p>
        <span>Votes With Party PCT: </span>
        {member.votes_with_party_pct}
      </p>
    </div>
  );
};
