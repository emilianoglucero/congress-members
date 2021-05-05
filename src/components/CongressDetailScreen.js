import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { getObjects } from "../helpers/getObjects";
import { CongressMemberDetails } from "./ui/CongressMemberDetails";

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
        <p>Loading...</p>
      ) : (
        congressMemberInfo?.map((member) => (
          <CongressMemberDetails key={member.id} member={member} />
        ))
      )}

      <button onClick={handleReturn}>Back</button>
    </div>
  );
};
