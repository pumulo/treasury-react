import React from "react";
import { useEntityByTypeListQuery } from "../../../store";
import { EntityUserI } from "../../common/types";
import { UserCard } from "./UserCard";

export const UserList = () => {
    const { data, error, isLoading } = useEntityByTypeListQuery('User');
    console.log(data);
    const userArray: EntityUserI[] = data;
    // console.log(entityArray);
    // let userArray: UserI[];
    // if (entityArray) {
    //     userArray = entityArray.map((entity: EntityUserI) => {
    //         const {name, email, phone} = entity.values;
    //         //console.log(contactValues)
    //         //@ts-ignore
    //         const contactInformation: any = contactValues["Contact Information"]
    //         //@ts-ignore
    //         const privilegeAttributes: any = contactValues["Privilege Attributes"]
    //         return {
    //             id: entity.id,
    //             description: entity.description,
    //             contactInformation: entity.values,
    //             privileges: {...privilegeAttributes}
    //         } 
    //     });

    // }
    let content;

    const createCard = (user: EntityUserI) => {
        if (user.values.name) {
            return (
            
                <UserCard user={user} key={user.id}/>
            )
        }
    }

    const createUserCards = () => {
        // console.log(entityArray);
        return (
            <div className='columns-1'>
                {
                    userArray.map(
                        (user, index) => {
                            return createCard(
                                user
                            )
                        }
                    )
                }
            </div >
        );
    }

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
            content = createUserCards()
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
        <div className="flex flex-col overflow-x-auto">
            <div className="sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-x-auto">
                        {/* add user cards */}
                        {content}
                    </div>
                </div>
            </div>
        </div>
    )
}