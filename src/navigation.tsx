import {
    createBrowserRouter,
} from "react-router-dom";

import AppLayout from "./components/AppLayout";
import { Dashboard } from "./components/treasury/Dashboard";
import { Accounts } from "./components/treasury/account/Accounts";
import { ManageUsers } from "./components/treasury/ManageUsers";
import { Reports } from "./components/treasury/Reports";
import { Tasks } from "./components/treasury/task/Tasks";
import { Messages } from "./components/treasury/Messages";
import { Chat } from "./components/treasury/Chat";
import { Help } from "./components/treasury/Help";
import { RemoteDeposit } from "./components/treasury/Deposits";
import { ManageEntitlements } from "./components/treasury/user/ManageEntitlements";
import { AccountDetails } from "./components/treasury/account/AccountDetails";
import { AccountMaintenance } from "./components/treasury/account/AccountMaintenance";
import { UserMaintenance } from "./components/treasury/user/UserMaintenance";
import { GatherDocuments } from "./components/treasury/documents/GatherDocuments";
import { TransactionSummary } from "./components/treasury/account/TransactionSummary";
import { PaymentPegaWidget } from "./components/treasury/payments/PaymentPegaWidget";
import { PaymentCase } from "./components/treasury/payments/PaymentCase";
import { CreatePayment } from "./components/treasury/payments/CreatePayment";
import { viewState } from "./components/treasury/SectionHeader";
import { ServiceDashboardHome } from "./components/treasury/service_dashboard/ServiceDashboardHome";
  
const router = createBrowserRouter(
    [
        {
            element: <AppLayout/>,
            children: [
                {
                    path:"/",
                    element: (
                        <Dashboard />
                    )
                },
                {
                    path:"/users",
                    element: (
                        <ManageUsers />
                    )
                },
                {
                    path:"/uploads/:purpose",
                    element: (
                        <GatherDocuments />
                    )
                },
                {
                    path:"/user_maintenance/:userID",
                    element: (
                        <UserMaintenance />
                    )
                },
                {
                    path:"/reports",
                    element: (
                        <Reports />
                    )
                },
                {
                    path:"/accounts",
                    element: (
                        <Accounts />
                    )
                },
                {
                    path:"/account/:id",
                    element: (
                        <AccountDetails />
                    )
                },
                {
                    path:"/account_maintenance/:accountID",
                    element: (
                        <AccountMaintenance />
                    )   
                },
                {
                    path:"/transaction_inquiry/:accountID/:id",
                    element: (
                        <TransactionSummary />
                    )
                },
                {
                    path:"/deposits/:accountID",
                    element: (
                        <RemoteDeposit />
                    )
                },
                {
                    path:"/service_dashboard",
                    element: (
                        <ServiceDashboardHome />
                    )
                },
                {
                    path:"/payments",
                    element: (
                        <PaymentPegaWidget />
                    )
                },
                {
                    path:"/payments/:caseID",
                    element: (
                        <PaymentCase />
                    )
                },
                {
                    path:"/payment/new",
                    element: (
                        <CreatePayment />
                    )
                },
                {
                    path:"/entitlements",
                    element: (
                        <ManageEntitlements />
                    )
                },
                {
                    path:"/tasks",
                    element: (
                        <Tasks />
                    )
                },
                {
                    path:"/messages",
                    element: (
                        <Messages defaultState={viewState.MAX} />
                    )
                },
                {
                    path:"/help",
                    element: (
                        <Help />
                    )
                },
                {
                    path:"/chat",
                    element: (
                        <Chat />
                    )
                },
            ]
        },
    ]
);

export default router; 