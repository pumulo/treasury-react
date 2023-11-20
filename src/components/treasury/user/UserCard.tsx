import React from "react";
import {
    FaEdit
} from 'react-icons/fa';
import { userProps } from "./types";
import { NavLink } from "react-router-dom";

export const UserCard = (props: userProps) => {
    const {user} = props;
    return (
            <div className='block rounded-lg bg-white p-4 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700'>
                <h5 className="mb-2 text-base font-semibold leading-tight border-bofa dark:text-neutral-50 columns-2">
                    <div>{user.values.name} - {user.values.role}</div>
                    <div className="flex cursor-pointer mt-4">
                        <NavLink
                            to={`/user_maintenance/${user.id}`}
                            id='accountMaintenanceLinkId'
                            title='Maintain Account'
                            className='text-bofa underline cursor-pointer ml-1'
                        >
                            <div className="flex items-baseline cursor-pointer justify-between pl-1 underline">
                                <FaEdit></FaEdit> <span className="ml-2">Edit User</span>  
                            </div>
                        </NavLink>
                    </div>
                </h5>
                <h5 className="mb-1 text-sm font-light leading-tight border-bofa dark:text-neutral-50 columns-2">
                    <div>{user.values.email}</div>
                    <div>{user.values.phone}</div>
                </h5>
            </div>
    )
}