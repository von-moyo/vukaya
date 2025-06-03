import { createBrowserRouter } from "react-router-dom";
import {
  NotFound,
  Login,
  Home,
} from "../pages";
import { MainLayout } from "../components";
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
