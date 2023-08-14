import { Outlet } from "react-router-dom";
import ProfileHeader from "../components/headers/profileHeader/ProfileHeader";
import Sidebar from "../components/menus/Sidebar";
import MainContainer from "../components/ui/MainContainer";

const RootLayout = () => {
  return (
    <>
      <ProfileHeader />
      <Sidebar />
      <MainContainer>
        <Outlet />
      </MainContainer>
    </>
  );
};

export default RootLayout;
