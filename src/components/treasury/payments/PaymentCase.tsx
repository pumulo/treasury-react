import React from "react";
import { useParams } from "react-router-dom";
import { BasePegaDivProps, PEGA_ACTION, basePegaDiv } from "../../common/PegaDivProps";
import { SectionHeader, viewState } from "../SectionHeader";
import { TWPegaDiv } from "../../common/PegaDiv";

export const PaymentCase = () => {
    const { caseID } = useParams();

    const basePegaDivProps: BasePegaDivProps = {
        action: PEGA_ACTION.OpenCase,
        caseID: caseID,
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