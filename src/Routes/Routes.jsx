import {createBrowserRouter,} from "react-router-dom";
import Signin from "../Pages/Signin";
import Signup from "../Pages/Signup";
import DashBoard from "../Layout/DashBoard";
import AddData from "../Pages/AddData";
import Home from "../Home/Home";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <DashBoard></DashBoard>,
      children: [
        {
          path: "/",
          element: <Home></Home>
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
      ]
    },
  ]);