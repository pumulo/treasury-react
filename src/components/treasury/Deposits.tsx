import React from "react";
import { TWPegaDiv } from "../common/PegaDiv";
import { SectionHeader } from "./SectionHeader";
import { useParams } from "react-router-dom";
import { BasePegaDivProps, PEGA_ACTION, basePegaDiv } from "../common/PegaDivProps";

export const RemoteDeposit = () => {
    const { accountID } = useParams();
    const basePegaDivProps: BasePegaDivProps = {
        action: PEGA_ACTION.CreateCase,
        caseTypeID: 'Bank-Treasury-Servicing-Work-RemoteDeposit',
        casePage: 'assignmentWithStages',
        appAlias: 'servicing',
        startingFields: `{"AccountID": "${accountID}"}`
    }
    const pegaDiv = basePegaDiv(basePegaDivProps);
    return (
        <div className="flex flex-col bg-white bg-bofa-white m-4 min-w-fit p-2">
            <SectionHeader title='Remote Deposit' maximizeRoute="/accounts"></SectionHeader>
            
            <TWPegaDiv {...pegaDiv} ></TWPegaDiv>
        </div>
    )
}