import React from "react";
import { AccountsCard } from "./account/AccountsCard";
import { Messages } from "./Messages";
import { UsersCard } from "./user/UsersCard";
import { PaymentsCard } from "./payments/PaymentsCard";
import { viewState } from "./SectionHeader";
import { ServiceDashboardCard } from "./service_dashboard/ServiceDashboardCard";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const DashboardI = () => {
    return (
        <div className="min-h-fit h-fit min-w-full flex flex-col bg-bofa-light"> 
            <div className="flex flex-row min-w-full min-h-fit p-0">
                <div className="flex flex-col w-3/4 min-h-fit">
                    <div className="ml-4 mt-2">Hello, Pumulo</div>
                    <div className="min-h-fit h-fit min-w-full flex flex-col bg-bofa-light"> 
                        <div className="flex flex-row min-w-full min-h-fit p-0">
                            {/* wide workspace panel */}
                            <div className="flex flex-col w-full min-h-fit">
                                <ServiceDashboardCard width='min-w-1/4'/>
                            </div>
                        </div>
                        <div className="flex flex-row min-w-full min-h-fit p-0">
                            {/* narrow workspace panel */}
                            <div className="flex flex-col w-full min-h-fit">
                                <AccountsCard width='min-w-1/4'/>
                                <PaymentsCard width='min-w-1/4'/>
                            </div>
                            {/* wide workspace panel */}
                            {/* <div className="flex flex-col w-2/3 min-h-fit">
                                <PaymentsCard width='min-w-1/4'/>
                            </div> */}
                        </div>
                    </div>
                </div>
                {/* rights panel */}
                <div className="flex flex-col w-1/4 min-h-fit">
                    <Messages defaultState={viewState.MIN}/>
                </div>
            </div>
        </div>
    )
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const DashboardII = () => {
    return (
        <div className="min-h-fit h-fit min-w-full flex flex-col bg-bofa-light"> 
            <div className="ml-4 mt-2">Hello, Becky</div>
            <div className="flex flex-row min-w-full min-h-fit p-0">
                {/* left panel */}
                <div className="flex flex-col w-2/3 min-h-fit">
                    <PaymentsCard width='min-w-1/4'/>
                    <UsersCard />
                </div>
                {/* middle panel */}
                <div className="flex flex-col w-1/2 min-h-fit">
                    <AccountsCard width='min-w-1/4'/>
                </div>
                {/* rights panel */}
                <div className="flex flex-col w-1/4 min-h-fit">
                    <Messages defaultState={viewState.MIN}/>
                </div>
            </div>
        </div>
    )
}

export { DashboardI as Dashboard};