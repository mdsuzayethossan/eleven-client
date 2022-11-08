import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login";
import PrivateRoute from "./PrivateRoute";
import Register from "../components/Register";
import Main from "../layouts/Main";
import Blog from "../pages/Blog";
import Home from "../pages/Home";
import Services from "../components/Services";
import ServiceDetails from "../components/ServiceDetails";
import AddService from "../components/AddService";
import MyReview from "../components/MyReview";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/services/:id",
        element: <ServiceDetails></ServiceDetails>,
      },
      {
        path: "/add-service",
        element: <AddService></AddService>,
      },
      {
        path: "/my-reviews",
        element: <MyReview></MyReview>,
      },
    ],
  },
]);
