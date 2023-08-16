import styles from "./MainInfo.module.css";
import { BiMap, BiTime } from "react-icons/bi";

const currentEvent = {
  id: 1,
  date: new Date(2023, 10, 7),
  hour: "10:25",

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

function getDate(date) {
  let dateObj = {
    day: date?.getDate(),
    month: date?.toLocaleString("default", { month: "short" }),
    year: date?.getFullYear(),
  };
  return dateObj;
}

const eventDate = getDate(currentEvent.date);
const eventDay = currentEvent?.date.toLocaleString("en-us", {
  weekday: "short",
});

const MainInfo = () => {
  return (
    <div className={styles["mainInfo-container"]}>
      <div className={styles.dateAndHour}>
        <div className={styles.dateContainer}>
          <p className={styles.text}>{eventDate.month}</p>
          <h3>{`${+eventDate.day < 10 ? "0" : ""} ${eventDate.day}`}</h3>
        </div>
        <div className={styles["info-container"]}>
          <h3 className={styles.title}>{currentEvent?.title}</h3>
          <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <BiTime size={20} color="#FF6B00" />

            <h4>{`   ${eventDay} - ${currentEvent.hour} hs`}</h4>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <BiMap size={20} color="#FF6B00" />
            <h4>{`${currentEvent?.location}`} </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainInfo;
