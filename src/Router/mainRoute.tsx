import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Common/Layout";
import DetailsPage from "../Pages/Screen/Users/DetailsPage";
import HostRoom from "../Pages/Screen/HostRoom";
import Register from "../Pages/Auth/Register";
import SignIn from "../Pages/Auth/SignIn";

export const mainRoute = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <DetailsPage />,
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
]);
