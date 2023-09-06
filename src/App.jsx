import "./App.css";
import "./variables.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import RootLayout from "./pages/Root";
import FriendsPage from "./pages/Friends/FriendsPage";
import ChatsPage from "./pages/Chats/ChatsPage";
import EventPage from "./pages/Events/EventPage";
import EventLayout from "./pages/EventLayout";
import Tasks from "./components/events/Tasks/Tasks";
import Bills from "./components/events/Bills/Bills";
import Chats from "./components/events/Chat/Chats";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/friends", element: <FriendsPage /> },
      { path: "/newEvent", element: <FriendsPage /> },
      { path: "/chats", element: <ChatsPage /> },
    ],
  },
  {
    path: "/event/:eventId",
    element: <EventLayout />,
    children: [
      { index: true, element: <EventPage /> },
      { path: "tasks", element: <Tasks /> },
      { path: "bills", element: <Bills /> },
      { path: "chat", element: <Chats /> },
    ],
  },
]);

function App() {
  return (
    // <>
    //   <ProfileHeader />
    //   <HomePage />
    // </>

    <RouterProvider router={router} />
  );
}

export default App;
