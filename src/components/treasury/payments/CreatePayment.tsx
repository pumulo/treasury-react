import React from "react";
import { TWPegaDiv } from "../../common/PegaDiv";
import { SectionHeader, viewState } from "../SectionHeader";
import { BasePegaDivProps, PEGA_ACTION, basePegaDiv } from "../../common/PegaDivProps";

export const CreatePayment = () => {
    const basePegaDivProps: BasePegaDivProps = {
        action: PEGA_ACTION.CreateCase,
        caseTypeID: 'Bank-Treasury-Servicing-Work-Payment',
        casePage: 'full',
        appAlias: 'servicing',
        startingFields: '{}'
    }
    const pegaDiv = basePegaDiv(basePegaDivProps);
    return (
        <div className="flex flex-col bg-white bg-bofa-white m-4 min-w-fit p-2">
            <SectionHeader title='Payment' maximizeRoute="/payments" defaultState={viewState.MAX}></SectionHeader>
            
            <TWPegaDiv {...pegaDiv} ></TWPegaDiv>
        </div>
    )
}