import { createBrowserRouter } from "react-router-dom";
import {
  NotFound,
  Home
} from "../pages";
import { MainLayout } from "../components";
const router = createBrowserRouter([
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
