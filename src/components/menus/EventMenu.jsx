import styles from "./EventMenu.module.css";
import { AiOutlineHome, AiOutlinePlus, AiOutlineWechat } from "react-icons/ai";

import { IoChatbubblesOutline } from "react-icons/io5";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { NavLink } from "react-router-dom";

//THIS I HAVE TO GET FROM CURRENT EVENT
const eventId = 1;

const EventMenu = () => {
  return (
    <div className={styles["event-menu"]}>
      {/* <NavLink to="/" activeClassName="active" className="menu-item"> */}
      <NavLink
        to={`/event/${eventId}`}
        className={({ isActive }) => (isActive ? styles.active : undefined)}
        end
      >
        <div className={styles.separator}></div>
        <span> General</span>
      </NavLink>
      <NavLink
        to="tasks"
        className={({ isActive }) => (isActive ? styles.active : undefined)}
        end
      >
        <span> Tasks</span>
      </NavLink>
      <NavLink
        to="bills"
        className={({ isActive }) => (isActive ? styles.active : undefined)}
      >
        <span> Bills</span>
      </NavLink>
      <NavLink
        to="/chats"
        className={({ isActive }) => (isActive ? styles.active : undefined)}
      >
        <span>Chat</span>
      </NavLink>
    </div>
  );
};

export default EventMenu;
