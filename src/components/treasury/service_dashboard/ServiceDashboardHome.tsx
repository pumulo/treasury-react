import React from "react";
import { SectionHeader, viewState } from "../SectionHeader";
import { ServiceDashboardTable } from "./ServiceTable";

export const ServiceDashboardHome = () => {

    return (
        <div className={"flex flex-col bg-white bg-bofa-white m-4 p-2 min-w-fit"}  >
            <SectionHeader title="Service Dashboard" maximizeRoute="/service_dashboard"  defaultState={viewState.MAX}></SectionHeader>
            <div className='block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700'>
                <ServiceDashboardTable />
            </div>
        </div>
    )
}