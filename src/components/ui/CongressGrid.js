import React from "react";
import { CongressGridItems } from "./CongressGridItems";

export const CongressGrid = ({ listOfMembers }) => {
  return (
    <div className="congress-member-card">
      {listOfMembers?.map((member) => (
        <CongressGridItems key={member.id} member={member} />
      ))}
    </div>
  );
};
