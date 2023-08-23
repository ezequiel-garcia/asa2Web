import React from "react";
import styles from "./EventDetails.module.css";

const EventDetails = ({ description, creator }) => {
  return (
    <div className={styles["event-details-container"]}>
      <div>
        <h3>Event Description</h3>
        <p>{description}</p>
      </div>
      <div className={styles["event-creator"]}>
        <img
          src={creator.profilePicture}
          style={{
            width: 80,
            height: 80,
            borderRadius: 20,
            objectFit: "cover",
          }}
        />
        <div>
          <h3>Event Creator</h3>
          <p>{creator.name}</p>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
