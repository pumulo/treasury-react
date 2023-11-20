import React from "react";
import { SectionHeader, viewState } from "./SectionHeader";
import { NavLink } from "react-router-dom";


export const ManageUsers = () => {
    return (
        <div className="flex flex-col bg-white bg-bofa-white m-4 min-w-fit p-2">
            <SectionHeader title='Manage Users' maximizeRoute="/users" defaultState={viewState.MAX}></SectionHeader>
            <NavLink
                to='/entitlements'
                id='entitlementsLinkId'
                title='Manage user entitlements'
                className='text-bofa underline cursor-pointer ml-1'
            >
                Manage User Entitlements
            </NavLink>
            
        </div>
    )
}