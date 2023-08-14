import React from "react";

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
    { name: "pepe", id: "1" },
    { name: "juan", id: "2" },
    { name: "Tu vieja", id: "3" },
    { name: "ags", id: "4" },
  ],
};

const EventInfo = () => {
  return <div>{eventInfo.title}</div>;
};

export default EventInfo;
