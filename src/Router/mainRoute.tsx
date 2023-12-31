import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Common/Layout";
import HostRoom from "../Pages/Screen/HostRoom";
import Register from "../Pages/Auth/Register";
import SignIn from "../Pages/Auth/SignIn";
import Description from "../Pages/Screen/Users/Description";
import ViewAllRooms from "../Pages/ViewAllRooms";
import LandingPage from "../Pages/Screen/Users/LandingPage";
import CreateRooms from "../Pages/Screen/Admin/CreateRooms";
import DashBoard from "../Pages/DashBord";
import Congratulation from "../Pages/Screen/Users/congratulatory";

export const mainRoute = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
    ],
  },
  {
    path: "/host",
    element: <HostRoom />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/detail",
    element: <Description />,
  },
  {
    path: "/admin-dashboard",
    element: <DashBoard />,
  },
  {
    path: "/view-all-rooms",
    element: <ViewAllRooms />,
  },
  {
    path: "/create-room",
    element: <CreateRooms />,
  },
  {
    path: "/congrat",
    element: < Congratulation/>,
  },
  
]);
