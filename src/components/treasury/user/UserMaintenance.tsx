import React from "react";
import { SectionHeader, viewState } from "../SectionHeader";
import { TWPegaDiv } from "../../common/PegaDiv";
import { useParams } from "react-router-dom";
import { BasePegaDivProps, PEGA_ACTION, basePegaDiv } from "../../common/PegaDivProps";


export const UserMaintenance = () => {
    const { userID } = useParams();
    const basePegaDivProps: BasePegaDivProps = {
        action: PEGA_ACTION.CreateCase,
        caseTypeID: 'Bank-Treasury-Servicing-Work-UserMaintenance',
        casePage: 'assignmentWithStages',
        appAlias: 'servicing',
        startingFields: `{"UserID": "${userID}"}`
    }
    const pegaDiv = basePegaDiv(basePegaDivProps);
    return (
        <div className="flex flex-col bg-white bg-bofa-white m-4 min-w-fit p-2">
            <SectionHeader title='User Maintenance' maximizeRoute={`/user_maintenance/${userID}`} defaultState={viewState.MAX}></SectionHeader>
            
            <TWPegaDiv {...pegaDiv} ></TWPegaDiv>
        </div>
    )
}