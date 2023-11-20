import React from "react";
import { SectionHeader, viewState } from "./SectionHeader";
import { TWPegaDiv } from "../common/PegaDiv";
import { BasePegaDivProps, PEGA_ACTION, basePegaDiv } from "../common/PegaDivProps";

export const Messages = () => {
    const basePegaDivProps: BasePegaDivProps = {
        action: PEGA_ACTION.OpenPage,
        casePage: 'assignmentWithStages',
        appAlias: 'servicing',
        startingFields: `{}`,
        pageID:'Messages',
        pageClass:'Bank-Treasury-Servicing-UIPages',
    }
    const pegaDiv = basePegaDiv(basePegaDivProps);
    return (
        <div className="flex flex-col bg-white bg-bofa-white m-4 min-w-fit p-2">
            <SectionHeader title='Messages & Tasks' maximizeRoute="/messages" defaultState={viewState.MAX}></SectionHeader>
            <TWPegaDiv {...pegaDiv} ></TWPegaDiv>
        </div>
    )
}