import React, { useState } from "react";
import axios from "axios";

const CreateGroup = () => {
  const [groupName, setGroupName] = useState("");
  const [groupDescription, setGroupDescription] = useState("");

  // const [organizerId, setOrganizerId] = useState("");

  const handleCreateGroup = () => {
  const newGroup = {
    groupName: groupName,
    groupDescription: groupDescription,
  };

  axios.post("http://localhost:8080/createGroups", newGroup)
    .then(response => {
      console.log("Group created:", response.data);
    })
    .catch(error => {
      if (error.response) {
        console.error("Error creating group:", error.response.data);
      } else {
        console.error("Error creating group:", error.message);
      }
    });
};



  return (
    <div>
      <h1>Organize Group</h1>

      <input
        type="text"
        placeholder="Group Name"
        value={groupName}
        onChange={(e) => setGroupName(e.target.value)}
      />
      <input
        placeholder="Group Description"
        value={groupDescription}
        onChange={(e) => setGroupDescription(e.target.value)}
      />
   

      <button onClick={handleCreateGroup}>Create Group</button>
    </div>
  );
}

export default CreateGroup;
