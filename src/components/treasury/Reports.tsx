import React from "react";
import { SectionHeader, viewState } from "./SectionHeader";
import { TWPegaDiv } from "../common/PegaDiv";
import { BasePegaDivProps, PEGA_ACTION, basePegaDiv } from "../common/PegaDivProps";

export const Reports = () => {
    const basePegaDivProps: BasePegaDivProps = {
        action: PEGA_ACTION.OpenPage,
        casePage: 'full',
        appAlias: 'servicing',
        startingFields: `{}`,
        pageID:'pyDashboardsManager',
        pageClass:'Data-Portal'
    }
    const pegaDiv = basePegaDiv(basePegaDivProps);
    return (
        <div className="flex flex-col bg-white bg-bofa-white m-4 min-w-fit p-2">
            <SectionHeader title='Reports' maximizeRoute="/reports" defaultState={viewState.MAX}></SectionHeader>
            <TWPegaDiv {...pegaDiv} ></TWPegaDiv>
        </div>
    )
}