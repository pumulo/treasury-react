import { PegaDivProps } from "./PegaDiv";
import { COLOR } from "./theme";

const theme = `{
    "base": {
    "palette": {
        "brand-primary": "${COLOR.bofa.red}",
        "foreground-color": "${COLOR.bofa.DEFAULT}",
        "app-background": "${COLOR.bofa.white}"
    }
    }
}`;

const id = 'theEmbed'
const clientId = '75166639853513919740';
const pegaServerUrl =  'https://treasury.pegatsdemo.com/prweb/';
const staticContentUrl = 'https://prod-cdn.constellation.pega.io/8.23.0-110/react/prod/';
const authService = 'pega';
const PEGA_ACTION = {
    CreateCase: 'createCase',
    OpenPage: 'openPage',
    OpenCase: 'openCase'
}
interface BasePegaDivProps {
    action: string;
    caseTypeID?: string;
    caseID?: string;
    casePage: string;
    appAlias: string;
    startingFields: string;
    pageID?: string;
    pageClass?: string
}

const basePegaDiv = (props: BasePegaDivProps) => {
    const {action, caseTypeID, caseID, casePage, appAlias, startingFields, pageID, pageClass} = props;
    const pegaDiv: PegaDivProps = {
        id,
        action,
        casePage,
        appAlias,
        pegaServerUrl,
        staticContentUrl,
        authService,
        clientId,
        startingFields,
        theme
    }
    if (pageID) {
        pegaDiv.pageID = pageID
    }
    if (caseTypeID) {
        pegaDiv.caseTypeID = caseTypeID
    }
    if (caseID) {
        pegaDiv.caseID = caseID
    }
    if (pageClass) {
        pegaDiv.pageClass = pageClass
    }
    return pegaDiv;

}

export {BasePegaDivProps, PEGA_ACTION, basePegaDiv}