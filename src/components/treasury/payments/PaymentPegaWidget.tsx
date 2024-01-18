import React from "react";
import { PaymentTable } from "./PaymentTable";
import { SectionHeader, viewState } from "../SectionHeader";
import { Card1 } from "../account/AccountDetails";

export const PaymentPegaWidget = () => {

    return (
        <div className={"flex flex-col bg-white bg-bofa-white m-4 p-2 min-w-fit"}  >
            <SectionHeader title="Payments" maximizeRoute="/payments"  defaultState={viewState.MAX}></SectionHeader>
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
            <div className='block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700'>
                <PaymentTable />
            </div>
        </div>
    )
}