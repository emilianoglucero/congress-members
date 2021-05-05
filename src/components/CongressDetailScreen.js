import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { getObjects } from "../helpers/getObjects";

export const CongressDetailScreen = ({ listOfMembers }) => {
  console.log(listOfMembers);
  const { congressId } = useParams();
  console.log(congressId);
  const history = useHistory();

  const [congressMemberInfo, setCongressMemberInfo] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchObjects = async () => {
      const result = await getObjects(listOfMembers, "id", congressId);
      setCongressMemberInfo(result);
      setLoading(false);
    };
    fetchObjects();
  }, [congressId, listOfMembers]);

  const handleReturn = () => {
    history.goBack();
  };

  return (
    <div>
      <h1>Congress Member Details</h1>
      {loading ? (
        <p>Loading</p>
      ) : (
        congressMemberInfo?.map((member) => (
          <>
            <p>{member.id}</p>
            <p>{member.first_name}</p>
            <p>{member.party}</p>
            <p>{member.gender}</p>
            <p>{member.date_of_birth}</p>
            <p>{member.last_updated}</p>
            <p>{member.state}</p>
            <p>{member.title}</p>
            <p>{member.total_votes}</p>
            <p>{member.missed_votes}</p>
            <p>{member.missed_votes_pct}</p>
            <p>{member.votes_against_party_pct}</p>
            <p>{member.votes_with_party_pct}</p>
          </>
        ))
      )}

      <button onClick={handleReturn}>Back</button>
    </div>
  );
};
