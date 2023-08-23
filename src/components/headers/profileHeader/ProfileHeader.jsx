import styles from "./ProfileHeader.module.css";
import { FiSettings } from "react-icons/fi";

const ProfileHeader = () => {
  return (
    <div className={styles["profil-container"]}>
      <div className={styles["picture-name-container"]}>
        <img
          src="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
          alt="profile picture"
        />
        <h3>Doggy</h3>
      </div>
      <a>
        <FiSettings />
      </a>
    </div>
  );
};

export default ProfileHeader;
