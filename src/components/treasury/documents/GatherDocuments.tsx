import React from "react";
import { TWPegaDiv } from "../../common/PegaDiv";
import { SectionHeader } from "../SectionHeader";
import { useParams } from "react-router-dom";
import { BasePegaDivProps, PEGA_ACTION, basePegaDiv } from "../../common/PegaDivProps";

export const GatherDocuments = () => {
    const { purpose } = useParams();
    const basePegaDivProps: BasePegaDivProps = {
        action: PEGA_ACTION.CreateCase,
        caseTypeID: 'Bank-Treasury-Servicing-Work-DocumentGathering',
        casePage: 'assignmentWithStages',
        appAlias: 'servicing',
        startingFields: `{}`
    }
    if (purpose) {
        if (purpose!=='new') {
            basePegaDivProps.startingFields = `{"pyDescription": "${purpose}"}`
        }
    }
    const pegaDiv = basePegaDiv(basePegaDivProps);
    return (
        <div className="flex flex-col bg-white bg-bofa-white m-4 min-w-fit p-2">
            <SectionHeader title='Please Upload Your Document(s)' maximizeRoute="/upload"></SectionHeader>
            
            <TWPegaDiv {...pegaDiv} ></TWPegaDiv>
        </div>
    )
}