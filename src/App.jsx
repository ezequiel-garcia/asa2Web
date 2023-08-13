import "./App.css";
import "./variables.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProfileHeader from "./components/headers/profileHeader/ProfileHeader";
import HomePage from "./pages/Home/HomePage";
import RootLayout from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{ path: "/", element: <HomePage /> }],
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
