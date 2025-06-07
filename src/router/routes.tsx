import { createBrowserRouter } from "react-router-dom";
import {
  NotFound,
  Login,
  Home,
  WhoWeServe,
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
        path: "/who-we-serve",
        element: <WhoWeServe />,
      },
      {
        path: "/who-we-serve/healthcare-organizations",
        element: <Home />,
      },
      {
        path: "/who-we-serve/financial-services",
        element: <Home />,
      },
      {
        path: "/who-we-serve/manufacturing",
        element: <Home />,
      },
      {
        path: "/who-we-serve/government-agencies",
        element: <Home />,
      },
      {
        path: "/who-we-serve/technology-companies",
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
