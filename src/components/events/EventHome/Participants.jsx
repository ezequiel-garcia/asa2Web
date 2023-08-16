import React from "react";
import { Link } from "react-router-dom";
import styles from "./Participants.module.css";

const Participants = ({ participants }) => {
  //   let toShowProfile = Object.values(participants);
  //   const lengthParticipants = Object.keys(participants).length;

  const lengthParticipants = participants.length;

  if (lengthParticipants > 4) {
    toShowProfile = toShowProfile.slice(0, 4);
  }

  return (
    <div style={{ width: "100%", marginTop: 40 }}>
      <div className={styles["participants-title"]}>
        <Link to="">
          <h3>{`Participants (${lengthParticipants})`}</h3>
        </Link>
        <Link to="" className={styles["add-participant"]}>
          Add
        </Link>
      </div>

      <div className={styles.profiles}>
        {/* TAKE EVENT PARTICIPANTS AND PUT THEIR PICTURE, IF MORE THAN 4 SO ...
           NOW I'LL TAKE THE USERS PICTURES. AT LEAST THE CREATOR PICTURE WILL BE THERE*/}

        {participants.map((participant) => {
          return (
            <div key={participant.uid} style={{ marginRight: 5 }}>
              <img
                className={styles["profile-picture"]}
                src={participant.profilePicture}
                alt="Profile picture"
              />
              <p className={styles.name}>
                {participant.name.indexOf(" ") > 1
                  ? participant.name.substring(0, participant.name.indexOf(" "))
                  : participant.name}
              </p>
            </div>
          );
        })}

        {/* {Object.values(participants).map(participant)} */}

        {lengthParticipants > 3 && <p style={{ fontSize: 30 }}>...</p>}
      </div>
    </div>
  );
};

export default Participants;
