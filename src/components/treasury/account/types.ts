interface AccountI {
    id: string
    description: string
    accountNumber: string
    accountType: string
    currency: string
    availableBalance: string
    minimumBalanceRequirement: string
    manager: string
    dateOpened: string
    interestRate: string
    transactionFees: string
    foreignExchangeServicesAvailable: boolean
    createdAt: string
}

export {AccountI};