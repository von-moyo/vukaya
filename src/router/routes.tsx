import { createBrowserRouter } from "react-router-dom";
import {
  NotFound,
  Login,
} from "../pages";
import { MainLayout } from "../components";
import Home from "../pages/home";
const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
