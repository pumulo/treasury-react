import React from "react";
import { SectionHeader } from "../SectionHeader";
import { AccountList } from "./AccountList";

export const AccountsCard = (props: any) => {
    const width = props.width? props.width : 'min-w-fit';
    
    return (
        <div className={"flex flex-col bg-white bg-bofa-white m-4 p-2 " + width}  >
            <SectionHeader title='Accounts' maximizeRoute="/accounts"></SectionHeader>
            <div>
                <AccountList></AccountList>
            </div>
        </div>
    )
}