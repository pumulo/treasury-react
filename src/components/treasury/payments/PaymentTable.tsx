import { ColDef, ColGroupDef } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useEntityByTypeListQuery } from "../../../store";
import { EntityPaymentI } from "../../common/types";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

export const PaymentTable = () => {
    const { data, error, isLoading } = useEntityByTypeListQuery('Payment');
    console.log(data);
    const paymentArray: EntityPaymentI[] = data;
    const navigate = useNavigate();

    //@ts-ignore
    const paymentClickedListener = useCallback( e => {
        // go to page
        navigate(`/payments/${e.data.id}`);
        
    });

    let content;
    if (isLoading) {
        content = (
            <tbody>
                <tr>
                    <td colSpan={6}>
                        Loading user data...
                    </td>
                </tr>
            </tbody>
        )
    } else if (error) {
        content = (
            <tbody>
                <tr>
                    <td colSpan={6}>
                        Error loading payment information
                    </td>
                </tr>
            </tbody>
        )
    } else {
        if (data) {
            let userRows = paymentArray.map((payment: EntityPaymentI) => {
                return {
                    id: payment.id,
                    amount: `${payment.values.Currency} ${payment.values.Amount}`,
                    date: payment.values.Date,
                    frequency: payment.values.Frequency,
                    destination: payment.values.Destination,
                    status: payment.values.Status
                }
            })
            const columnDefs: (ColDef<any, any> | ColGroupDef<any>)[] | null | undefined = [
                {field: 'id', hide: true},
                {field: 'amount', sortable: true, filter: true},
                {field: 'frequency', sortable: true, filter: true},
                {field: 'destination', sortable: true, filter: true},
                {field: 'status', sortable: true, filter: true},
            ]
            //@ts-ignore
            content = <AgGridReact rowData={userRows} columnDefs={columnDefs} animateRows={true} onCellClicked={paymentClickedListener}/>
        } else {
            content = (
                <tbody>
                    <tr>
                        <td colSpan={6}>
                            Error loading users
                            <div>
                                <span>
                                    {error}
                                </span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            )
        }
    }
    return (
        <div className="ag-theme-alpine" style={{height: 500}}>
            {content}
        </div>
    )
}
