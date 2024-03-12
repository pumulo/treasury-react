import React from "react";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { BasePegaDivProps, PEGA_ACTION, basePegaDiv } from "../../common/PegaDivProps";
import { TWPegaDiv } from "../../common/PegaDiv";

export const ServiceDashboardTable = () => {
    // optimize this to use only payments with certain status
    const basePegaDivProps: BasePegaDivProps = {
        action: PEGA_ACTION.OpenPage,
        pageID: 'ServiceDashboard_1',
        pageClass: 'Bank-Treasury-Servicing-UIPages',
        casePage: 'assignment',
        appAlias: 'servicing',
        startingFields: '{}'
    }


    const pegaDiv = basePegaDiv(basePegaDivProps);

    
    return (
        <TWPegaDiv {...pegaDiv} ></TWPegaDiv>
    )
}
