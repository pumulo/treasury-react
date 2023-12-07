import React from "react";
import { SectionHeader } from "../SectionHeader";
import { TWPegaDiv } from "../../common/PegaDiv";
import { BasePegaDivProps, PEGA_ACTION, basePegaDiv } from "../../common/PegaDivProps";

export const Tasks = () => {
    const basePegaDivProps: BasePegaDivProps = {
        action: PEGA_ACTION.OpenPage,
        caseTypeID: 'Bank-Treasury-Servicing-Work-AccountMaintenance',
        casePage: 'full',
        appAlias: 'servicing',
        startingFields: `{}`,
        pageID:'pyWorklist',
        pageClass:'Data-Portal',
    }
    const pegaDiv = basePegaDiv(basePegaDivProps);
    return (
        <div className="flex flex-col bg-white bg-bofa-white m-4 min-w-fit p-2">
            <SectionHeader title='My Tasks' maximizeRoute="/tasks"></SectionHeader>
            <TWPegaDiv {...pegaDiv} ></TWPegaDiv>
        </div>
    )
}
