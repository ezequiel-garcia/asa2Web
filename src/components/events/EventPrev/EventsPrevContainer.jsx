/* eslint-disable react/prop-types */
import EventPrev from "./EventPrev";
import styles from "./EventPrev.module.css";

const EventsPrevContainer = ({ events, previous }) => {
  //Filter events by previous and upcoming
  let eventsToShow = [];
  if (previous) {
    eventsToShow = events
      .filter((event) => event.date < new Date())
      .sort((a, b) => a.date - b.date);
  } else {
    eventsToShow = events
      .filter((event) => event.date >= new Date())
      .sort((a, b) => a.date - b.date);
  }

  if (eventsToShow.length < 1) {
    return <p>{`No ${previous ? "Previous" : "Upcoming"} Events`}</p>;
  }

  return (
    <div className={styles["prevEvents-container"]}>
      {eventsToShow?.map((event) => {
        return <EventPrev key={event.id} event={event} />;
      })}
    </div>
  );
};

export default EventsPrevContainer;
