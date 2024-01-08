import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const CashPro = () => {
    return (
        <div className="min-h-full h-fit flex flex-col">
            <Navbar />
            <Outlet />
        </div>
    )
}

export default CashPro;