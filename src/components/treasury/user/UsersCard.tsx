import React from "react";
import { SectionHeader } from "../SectionHeader";
import { UserTable } from "./UserTable";

export const UsersCard = (props: any) => {
    const width = props.width? props.width : 'min-w-fit';
    
    return (
        <div className={"flex flex-col bg-white bg-bofa-white m-4 p-2 " + width}>
            <SectionHeader title='Manage Users' maximizeRoute="/users"></SectionHeader>
            <div>
                <UserTable />
            </div>
        </div>
    )
}