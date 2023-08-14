// import { NavLink } from 'react-router-dom';
import styles from "./Sidebar.module.css";
import { AiOutlineHome, AiOutlinePlus, AiOutlineWechat } from "react-icons/ai";

import { IoChatbubblesOutline } from "react-icons/io5";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      {/* <NavLink to="/" activeClassName="active" className="menu-item"> */}
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? styles.active : undefined)}
      >
        <AiOutlineHome />
        <span> Home</span>
      </NavLink>
      <NavLink
        to="/friends"
        className={({ isActive }) => (isActive ? styles.active : undefined)}
      >
        <LiaUserFriendsSolid />
        <span> Friends</span>
      </NavLink>
      <NavLink
        to="/newEvent"
        className={({ isActive }) => (isActive ? styles.active : undefined)}
      >
        <AiOutlinePlus />
        <span> Add Event</span>
      </NavLink>
      <NavLink
        to="/chats"
        className={({ isActive }) => (isActive ? styles.active : undefined)}
      >
        <IoChatbubblesOutline />
        <span> Chats</span>
      </NavLink>
    </div>
  );
};

export default Sidebar;
