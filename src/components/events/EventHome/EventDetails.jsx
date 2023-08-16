import React from "react";

const EventDetails = ({ description, creator }) => {
  return (
    <div style={{ width: "90%", marginTop: "20px" }}>
      <div style={{ marginBottom: "15px" }}>
        <h3>Event Information</h3>
        <p>{description}</p>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <img
          src={creator.profilePicture}
          style={{ width: 80, height: 80, borderRadius: 20 }}
        />
        <div>
          <h3 style={{ marginBottom: 5 }}>Event Creator</h3>
          <p>{creator.name}</p>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
