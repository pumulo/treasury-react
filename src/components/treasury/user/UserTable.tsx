import { ColDef, ColGroupDef } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useEntityByTypeListQuery } from "../../../store";
import { EntityUserI } from "../../common/types";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

export const UserTable = () => {
    const { data, error, isLoading } = useEntityByTypeListQuery('User');
    console.log(data);
    const userArray: EntityUserI[] = data;
    const navigate = useNavigate();

    //@ts-ignore
    const userClickedListener = useCallback( e => {
        // go to page
        navigate(`/user_maintenance/${e.data.id}`);
        
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
                        Error loading user
                    </td>
                </tr>
            </tbody>
        )
    } else {
        if (data) {
            let userRows = userArray.map((user: EntityUserI) => {
                return {
                    id: user.id,
                    name: user.values.name,
                    email: user.values.email,
                    phone: user.values.phone,
                    role: user.values.role
                }
            })
            const columnDefs: (ColDef<any, any> | ColGroupDef<any>)[] | null | undefined = [
                {field: 'id', hide: true},
                {field: 'role', sortable: true, filter: true},
                {field: 'name', sortable: true, filter: true},
                {field: 'email', sortable: true, filter: true},
                {field: 'phone', sortable: true, filter: true},
            ]
            //@ts-ignore
            content = <AgGridReact rowData={userRows} columnDefs={columnDefs} animateRows={true} onCellClicked={userClickedListener}/>
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
