import React from "react";
import { TWPegaDiv } from "../../common/PegaDiv";
import { SectionHeader, viewState } from "../SectionHeader";
import { NavLink } from "react-router-dom";
import { BasePegaDivProps, PEGA_ACTION, basePegaDiv } from "../../common/PegaDivProps";

export const Accounts = (props: any) => {
    const width = props.width? props.width : 'min-w-fit';
    const basePegaDivProps: BasePegaDivProps = {
        action: PEGA_ACTION.OpenPage,
        caseTypeID: 'Bank-Treasury-Servicing-Work-AccountMaintenance',
        casePage: 'assignmentWithStages',
        appAlias: 'servicing',
        startingFields: `{}`,
        pageID:'AccountMaintenance_1',
        pageClass:'Bank-Treasury-Servicing-UIPages',
    }
    const pegaDiv = basePegaDiv(basePegaDivProps);
    
    return (
        <div className={"flex flex-col bg-white bg-bofa-white m-4 p-2 " + width}  >
            <SectionHeader title='Accounts' maximizeRoute="/accounts" minimizeRoute="/" defaultState={viewState.MAX}></SectionHeader>
            <NavLink
                to='/deposits'
                id='remoteDepositLinkId'
                title='Create or manage remote deposits'
                className='text-bofa underline cursor-pointer ml-1'
            >
                Manage Deposits
            </NavLink>
            
            <TWPegaDiv {...pegaDiv} ></TWPegaDiv>
        </div>
    )
}