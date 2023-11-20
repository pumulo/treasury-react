interface EntityI {
    id: string
    type: string
    description: string
    values: any,
    status: string
    createdAt: string
}

interface AccountI {
    id: string
    type: string
    description: string
    values: {
        AccountNumber: string,
        ACHNumber: string,
        Organization: string
        Bank: string
        AccountType: string
        OrganizationInformation: string
        gcl_AuthorizedUsers: [
            {
                values: {
                    gc_User: string
                }
            }
        ]
        FinancialAttributes: {
            AverageMonthlyBalance: string,
            CreditLimit: string,
            DailyTransactionLimit: string,
            FreeWireTransfers: string,
            OverdraftFacility: string,
            CurrentBalance: string,
            Currency: string
        }
        InternationalBankingServices: {
            "International Cash Management Solutions": boolean,
            "Foreign Currency Accounts": boolean,
            "Trade Finance Facilities": boolean,
            "Risk Management Services": boolean
        }
    }
    status: string
    createdAt: string
}

interface EntityUserI {
    id: string
    type: string
    description: string
    values: {
        name: string
        email: string
        phone: string
        role: string
    }
    status: string
    createdAt: string
}

interface ContactInformationI {
    name: string,
    email: string,
    phone: string
}

export {EntityI, AccountI, EntityUserI, ContactInformationI};