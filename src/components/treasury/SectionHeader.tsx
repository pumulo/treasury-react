import React, { useState } from "react";
import {
    FaRegWindowMaximize,
    FaRegWindowClose
} from 'react-icons/fa';
import { NavLink } from "react-router-dom";

interface SectionHeaderProps {
    title: string,
    maximizeRoute: string,
    minimizeRoute?: string | undefined,
    defaultState?: viewState | undefined,
}
export enum viewState {
    MIN, MAX
}
export const SectionHeader = (props: SectionHeaderProps) => {
    let {title, maximizeRoute, minimizeRoute, defaultState} = props
    if (!minimizeRoute) {
        minimizeRoute = '/'
    }
    if (!defaultState) {
        defaultState = viewState.MIN
    }
    const [view, setView] = useState(defaultState)

    const toggleView = () => {
        (view === viewState.MAX)?
        setView(viewState.MIN):
        setView(viewState.MAX);
    }

    return (
        <div className="flex text-2x1 items-baseline md:flex justify-between gap-2 min-w-full">
            <span className="font-bold text-2xl text-bofa ">
                {title}
            </span> 
            <NavLink
                to={(view === viewState.MAX)? minimizeRoute: maximizeRoute}
                id={props.title + 'id'}
                onClick={toggleView}
            >   
                {
                    (view === viewState.MAX)? 
                    <FaRegWindowClose className="flex justify-end cursor-pointer"></FaRegWindowClose>:
                    <FaRegWindowMaximize className="flex justify-end cursor-pointer"></FaRegWindowMaximize>
                }
                
            </NavLink>
            
        </div>
    )
}