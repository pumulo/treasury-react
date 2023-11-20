import React from "react";
import { SectionHeader, viewState } from "../SectionHeader";

export const ManageEntitlements = () => {
    return (
        <div className="flex flex-col bg-white bg-bofa-white m-4 min-w-fit p-2">
            <SectionHeader title='Manage User Entitlements' maximizeRoute="/entitlements" defaultState={viewState.MAX}></SectionHeader>
            
        </div>
    )
}