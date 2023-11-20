import React from "react";
import { Copyright } from "./Copyright";
import CashPro from "./treasury/CashPro";

const AppLayout = () => {
    return (
        <div className="min-h-screen h-auto flex flex-col">
            <CashPro></CashPro>
        </div>
    )
}

export default AppLayout;