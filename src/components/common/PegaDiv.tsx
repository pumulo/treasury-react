import React, { MutableRefObject, ReactElement, createElement, forwardRef, useRef } from "react";
import { COLOR } from "./theme";
import PegaEmbedWrapper from "./PegaEmbedWrapper";

export interface PegaDivProps {
    id: string,
    action: string,
    caseTypeID?: string,
    pageID?:string,
    pageClass?:string,
    casePage: string,
    caseID?: string,
    appAlias: string,
    pegaServerUrl: string,
    staticContentUrl: string,
    authService: string,
    clientId: string,
    width?: string,
    startingFields?: string
    theme?: string
}

export const TWPegaDiv = (props: PegaDivProps) => {
    console.log(props);
    const pegaDiv: ReactElement = createElement('div')
    const ref = useRef(pegaDiv);
   
    return (
        <div className={"flex items-center p-2 mx-auto rounded-sm shadow-sm space-x-4 mt-2 " + props.width? props.width: "min-w-fit" + COLOR.primaryBG}>
            <div className="flex flex-col min-h-fit min-w-fit">
                <PegaEmbedWrapper
                    {...props}
                >
                </PegaEmbedWrapper>
            </div>
        </div>
    )
}