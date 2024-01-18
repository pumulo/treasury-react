import React from "react";
import { FaWrench } from "react-icons/fa";

import { NavLink, useParams } from 'react-router-dom';
import { SectionHeader, viewState } from "../SectionHeader";
import { useEntityQuery } from "../../../store";
import { AccountI } from "../../common/types";

interface CardAttributes {
    heading: string,
    className: string,
    link: string
}
export function Card1(props: CardAttributes) {
    const { heading, className, link } = props;
    return (
        <NavLink
            to={link}
            id='qlRequestUploadLinkId'
            title={heading}
        >
            <div className={`flex gap-4 rounded-xl shadow-sm p-6 ${className}`}>
                <div className="min-w-max"><FaWrench className="min-w-max text-bofa-red"/></div>
                <div className="space-y-2">
                <h3 className="text-[12px] font-semibold">{heading}</h3>
                </div>
            </div>
        </NavLink>
      
    );
  }


export const AccountDetails = (props: any) => {
    const { id } = useParams();
    const { data, error, isLoading } = useEntityQuery(id);
    const width = props.width? props.width : 'min-w-fit';
    let content;
    
    const createSummary = () => {
        const account: AccountI = data;
        const values = account.values;
        const headerStyle = "border-2 border-x-bofa-light p-4 m-4";
        const elementStyle = "border-2 border-x-bofa-light p-4 m-4";
        return (
            <div className={"flex flex-col bg-white bg-bofa-white m-4 p-2 " + width}  >
            <SectionHeader title={`${values.Organization} - Account number: ${values.AccountNumber}`} maximizeRoute="/accounts"  defaultState={viewState.MAX}></SectionHeader>
            <div className='block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700'>
                <h5 className="mb-2 text-sm font-light leading-tight border-bofa dark:text-neutral-50">
                    {values.OrganizationInformation}
                </h5>

                <h5 className="mb-4 text-lg font-semibold leading-tight border-bofa dark:text-neutral-50">
                    Financial Information:
                </h5>
                <table className="p-2 m-1 border-2 border-x-bofa-light ">
                    <tbody>
                        <tr>
                            <th className={headerStyle}>
                                Current Balance 
                            </th>
                            <th className={headerStyle}>
                                Average Monthly Balance 
                            </th>
                            <th className={headerStyle}>
                                Credit Limit
                            </th>
                            <th className={headerStyle}>
                                Daily Transaction Limit 
                            </th>
                            <th className={headerStyle}>
                                Free Wire Transfers 
                            </th>
                            <th className={headerStyle}>
                                Overdraft facility 
                            </th>
                        </tr>
                        <tr>
                            <td className={elementStyle}>
                                {values.FinancialAttributes.CurrentBalance}
                            </td>
                            <td className={elementStyle}>
                                {values.FinancialAttributes.AverageMonthlyBalance}
                            </td>
                            <td className={elementStyle}>
                                {values.FinancialAttributes.CreditLimit}
                            </td>
                            <td className={elementStyle}>
                                {values.FinancialAttributes.DailyTransactionLimit}
                            </td>
                            <td className={elementStyle}>
                                {values.FinancialAttributes.FreeWireTransfers}
                            </td>
                            <td className={elementStyle}>
                                {values.FinancialAttributes.OverdraftFacility}
                            </td>
                        </tr>
                    </tbody>
                </table>

                {/* <h5 className="mb-4 text-lg font-semibold leading-tight border-bofa dark:text-neutral-50">
                    Services:
                    { JSON.stringify(values.InternationalBankingServices) }
                </h5> */}

                {/* show cards for actions */}
                <div className="grid gap-8 grid-cols-4 md:grid-cols-4 xl:grid-cols-8 bg-white p-3 sm:p-8">
                    <Card1
                        className="bg-bofa text-bofa-white"
                        heading="Account maintenance"
                        link={`/account_maintenance/${id}`}
                    />
                    <Card1
                        className="bg-bofa text-bofa-white"
                        heading="Document Gathering"
                        link={`//uploads/Upload for account ${id}`}
                    />
                    <Card1
                        className="bg-bofa text-bofa-white"
                        heading="Remote Deposit"
                        link={`/deposits/${id}`}
                    />
                    <Card1
                        className="bg-bofa text-bofa-white"
                        heading="Transaction Inquiry"
                        link={`/transaction_inquiry/${values.AccountNumber}/${id}`}
                    />
                </div>
            </div>
        </div>
        )
    }


    if (isLoading) {
        content = (
            <tbody>
                <tr>
                    <td colSpan={6}>
                        Loading entity data...
                    </td>
                </tr>
            </tbody>
        )
    } else if (error) {
        content = (
            <tbody>
                <tr>
                    <td colSpan={6}>
                        Error loading entity
                    </td>
                </tr>
            </tbody>
        )
    } else {
        if (data) {
            content = createSummary()
        } else {
            content = (
                <tbody>
                    <tr>
                        <td colSpan={6}>
                            Error loading Entities
                            <div>
                                <span>
                                    {error}
                                </span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            )
        }
    }

    return (
        <>
            {content}
        </>
    )
}