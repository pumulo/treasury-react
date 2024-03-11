import React from "react";
import { SectionHeader } from "../SectionHeader";
import { ServiceDashboardTable } from "./ServiceTable";

export const ServiceDashboardCard = (props: any) => {
    const width = props.width? props.width : 'min-w-fit';
    
    return (
        <div className={"flex flex-col bg-white bg-bofa-white m-4 p-2 " + width}  >
            <SectionHeader title='Service Dashboard' maximizeRoute="/service_dashboard"></SectionHeader>
            <div>
                <ServiceDashboardTable />
            </div>
        </div>
    )
}