export interface PegaDiv extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
    id?: string,
    action?: string,
    pageID?: string,
    pageClass?: string,
    casePage?: string,
    appAlias?: string,
    pegaServerUrl?: string,
    staticContentUrl?: string,
    authService?: string,
    clientId?: string,
    caseTypeID?: string
}