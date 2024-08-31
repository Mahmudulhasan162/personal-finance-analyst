import {
    createBrowserRouter,
  } from "react-router-dom";
import Sidebar from "../Layout/Sidebar";
import Signin from "../Pages/Signin";
import Signup from "../Pages/Signup";
import DashBoard from "../Layout/DashBoard";
import AddData from "../Pages/AddData";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <DashBoard></DashBoard>,
      children: [
        {
            path: "/",
            element : <Sidebar></Sidebar>
        },
      ]
    },
    {
        path: "/login",
        element : <Signin></Signin>
    },
    {
        path: "/signup",
        element : <Signup/>
    },
    {
      path: '/add',
      element : <AddData></AddData>
    }
  ]);