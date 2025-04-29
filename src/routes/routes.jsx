import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import About from "../pages/About";
import ErrorPage from "../pages/ErrorPage";
import Cart from "../pages/Cart";
import Favourites from "../pages/Favourites";
import PhoneDetails from "../pages/PhoneDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        hydrateFallbackElement: <p>Loading......</p>,
        loader: () => fetch("phones.json"),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/favourite",
        element: <Favourites></Favourites>,
      },
      {
        path: "/phone-details",
        element: <PhoneDetails></PhoneDetails>,
      },
    ],
  },
]);
export default router;
