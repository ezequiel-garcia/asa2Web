import { Outlet } from "react-router-dom";
import ProfileHeader from "../components/headers/profileHeader/ProfileHeader";
import Sidebar from "../components/menus/Sidebar";
import MainContainer from "../components/ui/MainContainer";
import EventMenu from "../components/menus/EventMenu";
import EventContainer from "../components/ui/EventContainer";

const EventLayout = () => {
  return (
    <>
      <ProfileHeader />
      <Sidebar />
      <MainContainer>
        <EventMenu />
        <EventContainer>
          <Outlet />
        </EventContainer>
      </MainContainer>
    </>
  );
};

export default EventLayout;
