import { Outlet } from "react-router-dom";
import ProfileHeader from "../components/headers/profileHeader/ProfileHeader";
import Sidebar from "../components/menus/Sidebar";

const RootLayout = () => {
  return (
    <>
      <ProfileHeader />
      <Sidebar />
      <Outlet />
    </>
  );
};

export default RootLayout;
