import { PegaDivProps } from "./PegaDiv";

const theme = `{
    "base": {
    "palette": {
        "brand-primary": "#E31837",
        "foreground-color": "#012169",
        "app-background": "#FFFFFF"
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
    OpenPage: 'openPage'
}
interface BasePegaDivProps {
    action: string;
    caseTypeID?: string;
    casePage: string;
    appAlias: string;
    startingFields: string;
    pageID?: string,
    pageClass?: string
}

const basePegaDiv = (props: BasePegaDivProps) => {
    const {action, caseTypeID, casePage, appAlias, startingFields, pageID, pageClass} = props;
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
    if (pageClass) {
        pegaDiv.pageClass = pageClass
    }
    return pegaDiv;

}

export {BasePegaDivProps, PEGA_ACTION, basePegaDiv}