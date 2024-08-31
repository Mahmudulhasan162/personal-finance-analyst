import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import FrontBoard from "./FrontBoard";
import Navbar from "../Header/Navbar";

const DashBoard = () => {
    return (
        <div className="bg-slate-950">
            <Navbar></Navbar>
            <div className="flex">
            <Sidebar></Sidebar>
            <FrontBoard></FrontBoard>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default DashBoard;