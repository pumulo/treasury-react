import React from "react";
import { AccountsCard } from "./account/AccountsCard";
import { Messages } from "./Messages";
import { UsersCard } from "./user/UsersCard";
import { PaymentsCard } from "./payments/PaymentsCard";

const Dashboard = () => {
    return (
        <div className="min-h-screen h-screen min-w-full flex flex-col bg-bofa-light"> 
            <div className="ml-4 mt-2">Hello, Becky</div>
            <div className="flex flex-row min-w-full min-h-fit p-0">
                {/* left panel */}
                <div className="flex flex-col w-1/2 min-h-fit">
                    <UsersCard />
                    {/* <ReportsBox /> */}
                </div>
                {/* middle panel */}
                <div className="flex flex-col w-1/4 min-h-fit">
                    <AccountsCard width='min-w-1/4'/>
                    {/* <PaymentsCard width='min-w-1/4'/> */}
                </div>
                {/* rights panel */}
                <div className="flex flex-col w-1/4 min-h-fit">
                    {/* <TasksCard /> */}
                    <Messages />
                </div>
            </div>
        </div>
    )
}

export default Dashboard;