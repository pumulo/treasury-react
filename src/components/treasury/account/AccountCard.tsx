import React from "react";
import { NavLink } from "react-router-dom";

export const AccountCard = (props: any) => {
    const account = props.account.values;
    let description = account.OrganizationInformation;
    const maxDescriptionLength = 100;
    if (description.length > maxDescriptionLength) {
        description = description.substring(0, maxDescriptionLength) + "...";
    }
    return (
        <NavLink
            to={`/account/${props.account.id}`}
            id='favoriteNavLink'
        >
            <div className='block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700'>
                <h5 className="mb-2 text-sm font-light leading-tight border-bofa dark:text-neutral-50">
                    {account.Organization}
                </h5>
                <h5 className="mb-4 text-lg font-semibold leading-tight border-bofa dark:text-neutral-50 text-center">
                    {account.FinancialAttributes.CurrentBalance}
                </h5>
                <p className="mb-3 text-xs font-extralight leading-tight border-bofa dark:text-neutral-50" title={account.OrganizationInformation}>{description}</p>
                <p className="mb-2 text-sm font-extralight leading-tight text-bofa dark:text-bofa-white">{account.AccountNumber}</p>
            </div>
        </NavLink>
    )
}