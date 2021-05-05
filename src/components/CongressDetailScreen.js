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
      <h1>Congress Screen</h1>
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
          </>
        ))
      )}

      <button onClick={handleReturn}>Atras</button>
    </div>
  );
};
