import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <p>Error</p>,
    children: [
      {
        path: "/",
        element: <Home> </Home>,
      },
      {
        path: "/about",
        element: <div>This is about page</div>,
      },
    ],
  },
]);
export default router;
