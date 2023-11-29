import React from "react";
import { SectionHeader } from "../SectionHeader";
import { PaymentTable } from "./PaymentTable";

export const PaymentsCard = (props: any) => {
    const width = props.width? props.width : 'min-w-fit';
    
    return (
        <div className={"flex flex-col bg-white bg-bofa-white m-4 p-2 " + width}  >
            <SectionHeader title='Payments' maximizeRoute="/payments"></SectionHeader>
            <div>
                <PaymentTable />
            </div>
        </div>
    )
}