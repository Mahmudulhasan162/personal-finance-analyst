import { Outlet } from "react-router-dom";
import Navbar from "../Header/Navbar";

const DashBoard = () => {
    return (
        <div className="bg-slate-950">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default DashBoard;