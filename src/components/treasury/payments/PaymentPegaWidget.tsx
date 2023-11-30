import React from "react";
import { PaymentTable } from "./PaymentTable";
import { SectionHeader, viewState } from "../SectionHeader";
import { NavLink } from "react-router-dom";

export const PaymentPegaWidget = () => {

    return (
        <div className={"flex flex-col bg-white bg-bofa-white m-4 p-2 min-w-fit"}  >
            <SectionHeader title="Payments" maximizeRoute="/payments"  defaultState={viewState.MAX}></SectionHeader>
            <NavLink
                to="/payment/new"
                id='newPaymentId'
                title="Create New Payment"
            >
                    
                    <h3 className="text-[12px] font-semibold  text-bofa-red">New Payment</h3>
            </NavLink>
            <div className='block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700'>
                <PaymentTable />
            </div>
        </div>
    )
}