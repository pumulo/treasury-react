import React from "react";
import { SectionHeader } from "../SectionHeader";
import { Card1 } from "../account/AccountDetails";

export const PaymentsCard = (props: any) => {
    const width = props.width? props.width : 'min-w-fit';
    
    return (
        <div className={"flex flex-col bg-white bg-bofa-white m-4 p-2 " + width}  >
            <SectionHeader title='Payments' maximizeRoute="/payments"></SectionHeader>
            <div className="grid gap-8 grid-cols-2 md:grid-cols-2 xl:grid-cols-4 bg-white p-3 sm:p-8">
                <Card1
                    className="bg-bofa text-bofa-white"
                    heading="New Payment"
                    link={'/payment/new'}
                />
                <Card1
                    className="bg-bofa text-bofa-white"
                    heading="Batch Payment Upload"
                    link={'/payment/new'}
                />
            </div>
        </div>
    )
}