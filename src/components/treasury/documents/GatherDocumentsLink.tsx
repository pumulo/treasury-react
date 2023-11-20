import React from "react";
import {
    FaUpload,
} from 'react-icons/fa';
import { NavLink } from "react-router-dom";

interface GatherDocsLinkProps {
    purpose?: string | null,
    cssStyle?: string| null,
    style: string
}
export const GatherDocsLink = (props: GatherDocsLinkProps) => {
    let content = <></>;
    let cssStle = props.cssStyle?  props.cssStyle: 'text-bofa underline cursor-pointer ml-1';
    switch (props.style) {
        case 'full': {
            content =   <div className="flex text-2x1 items-baseline md:flex justify-between gap-2">
                            <span className="font-bold text-2xl text-bofa ">
                                Upload Documents
                            </span> 
                            <NavLink
                                to={`/uploads/${props.purpose}`}
                                id={`Id_${Math.floor(Math.random()*1000000)}`}
                                className={cssStle}
                            >
                                <FaUpload className="flex justify-end cursor-pointer"></FaUpload>
                            </NavLink>
                            
                        </div>
            break;
        }
        case 'button': {
            content =   <NavLink
                            to={`/uploads/${props.purpose}`}
                            id={`Id_${Math.floor(Math.random()*1000000)}`}
                        >
                            <FaUpload className="flex justify-end cursor-pointer"></FaUpload>
                        </NavLink>
            break;
        }
        default: {
            content = <div>{`Your link style ${props.style} is not supported. You submitted the following purpose ${props.purpose}`}</div>
        }
    }
    return content
}