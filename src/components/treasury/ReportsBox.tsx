import React from "react";
import { SectionHeader } from "./SectionHeader";

export const ReportsBox = () => {
    return (
        <div className="flex flex-col bg-white bg-bofa-white m-4 min-w-fit p-2">
            <SectionHeader title='Reports' maximizeRoute="/reports"></SectionHeader>
            Create default content
        </div>
    )
}