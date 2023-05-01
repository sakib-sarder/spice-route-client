import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
            element: <Home></Home>,
        loader: ()=> fetch('http://localhost:5000/chefs')
      },
    ],
  },
]);

export default router;