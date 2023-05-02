import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ViewRecipes from "../Pages/ViewRecipes/ViewRecipes";
import ErrorPage from "../Pages/ErrorPage";
import Blog from "../Pages/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://spice-route-server-shakib232002-gmailcom.vercel.app/chefs"),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "chef/:id",
        element: <ViewRecipes></ViewRecipes>,
        loader: ({params})=> fetch(`https://spice-route-server-shakib232002-gmailcom.vercel.app/chefs/${params.id}`)
      },
      {
        path: "blog",
        element: <Blog></Blog>
      }
    ],
  },
]);

export default router;
