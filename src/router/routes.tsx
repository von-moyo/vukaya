import { createBrowserRouter } from "react-router-dom";
import {
  NotFound,
  Login,
  Home,
  WhoWeServe,
  HealthcareOrganization,
  HealthcareTechnnology,
  ProviderGroups,
  HealthPlans,
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
        path: "/who-we-serve/hospitals-health-systems",
        element: <HealthcareOrganization />,
      },
      {
        path: "/who-we-serve/healthcare-technology-medical-devices-biotech",
        element: <HealthcareTechnnology />,
      },
      {
        path: "/who-we-serve/provider-groups",
        element: <ProviderGroups />,
      },
      {
        path: "/who-we-serve/health-plans",
        element: <HealthPlans />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
