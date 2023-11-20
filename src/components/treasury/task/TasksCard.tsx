import React from "react";
import { SectionHeader } from "../SectionHeader";

export const TasksCard = () => {
    return (
        <div className="flex flex-col bg-white bg-bofa-white m-4 min-w-fit p-2">
            <SectionHeader title='My Tasks' maximizeRoute="/tasks"></SectionHeader>
            Expands to see all outstanding tasks
        </div>
    )
}
