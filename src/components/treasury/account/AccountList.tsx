import React from "react";
import { useEntityByTypeListQuery } from "../../../store";
import { AccountCard } from "./AccountCard";
import { AccountI } from "../../common/types";

export const AccountList = () => {
    const { data, error, isLoading } = useEntityByTypeListQuery('Treasury Account');
    console.log(data);
    const accountArray: AccountI[] = data;
    let content;

    const createCard = (account: AccountI) => {
        return (
            <AccountCard account={account} key={account.id}/>
        )
    }

    const createAccountCards = () => {
        // console.log(entityArray);
        return (
            <div className='columns-2'>
                {
                    accountArray.map(
                        (account, index) => {
                            return createCard(
                                account
                            )
                        }
                    )
                }
            </div >
        );
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
            content = createAccountCards()
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
        <div className="flex flex-col overflow-x-auto">
            <div className="sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-x-auto">
                        {/* add account cards */}
                        {content}
                    </div>
                </div>
            </div>
        </div>
    )
}