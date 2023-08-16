import React from "react";
import MainInfo from "./MainInfo";
import EventDetails from "./EventDetails";
import styles from "./MainInfo.module.css";
import Participants from "./Participants";

const eventInfo = {
  id: 1,
  date: new Date(2023, 10, 7),
  time: "10:25",

  title: "Asado ",
  location: "Hertzel 20, Tel Aviv",

  description: "Asadito con los pi",
  image: "https://cdn.pixabay.com/photo/2019/07/08/06/41/fire-4323960__480.jpg",
  shareBills: true,
  shareTasks: true,
  participants: [
    {
      name: "pepe",
      id: "1",
      profilePicture:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "juan",
      id: "2",
      profilePicture:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "Tu vieja",
      id: "3",
      profilePicture:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "ags",
      id: "4",
      profilePicture:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
  ],
};

const EventInfo = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div className={styles["event-info-container"]}>
        <MainInfo />
        <EventDetails
          description={eventInfo.description}
          creator={{
            name: "Pepe Argento",
            profilePicture:
              "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
          }}
        />
        <Participants participants={eventInfo.participants} />
      </div>
    </div>
  );
};

export default EventInfo;
