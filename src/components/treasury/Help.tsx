import React from "react";
import { SectionHeader } from "./SectionHeader";


export const Help = () => {
    return (
        <div className="flex flex-col bg-white bg-bofa-white m-4 min-w-fit p-2">
            <SectionHeader title='Help' maximizeRoute="/help"></SectionHeader>
            
        </div>
    )
}