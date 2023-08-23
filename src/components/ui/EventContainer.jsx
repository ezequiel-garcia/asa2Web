import styles from "./MainContainer.module.css";

const EventContainer = ({ children }) => {
  return <div className={styles["event-container"]}>{children}</div>;
};

export default EventContainer;
