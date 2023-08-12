// import { NavLink } from 'react-router-dom';
import styles from "./Sidebar.module.css";
import { AiOutlineHome, AiOutlinePlus, AiOutlineWechat } from "react-icons/ai";
import { LiaUserFriendsSolid } from "react-icons/lia";
// import { IoChatbubblesOutline } from 'react-icons/io';

// const Sidebar = () => {
//   return (
//     <div className="sidebar">
//       <NavLink to="/inbox" activeClassName="active" className="menu-item">
//         <i className="fas fa-inbox"></i>
//         <span>Inbox</span>
//       </NavLink>
//       <NavLink to="/mail" activeClassName="active" className="menu-item">
//         <i className="fas fa-envelope"></i>
//         <span>Mail</span>
//       </NavLink>
//       <NavLink to="/drafts" activeClassName="active" className="menu-item">
//         <i className="fas fa-file-alt"></i>
//         <span>Drafts</span>
//       </NavLink>
//       <NavLink to="/send" activeClassName="active" className="menu-item">
//         <i className="fas fa-paper-plane"></i>
//         <span>Send</span>
//       </NavLink>
//     </div>
//   );
// };

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <a>
        <AiOutlineHome />
        <span> Home</span>
      </a>
      <a>
        <LiaUserFriendsSolid />
        <span> Friends</span>
      </a>
      <a>
        <AiOutlinePlus />
        <span> Add Event</span>
      </a>
      <a>
        <AiOutlineWechat />
        <span> Chats</span>
      </a>
    </div>
  );
};

export default Sidebar;
