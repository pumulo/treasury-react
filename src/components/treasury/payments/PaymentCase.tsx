import React from "react";
import { useParams } from "react-router-dom";

export const PaymentCase = () => {
    const { paymentID } = useParams();
    let content = <div>
        Build for change<br/>
        <hr/>
        Create a web embed that shows the payment case with id: {paymentID}

    </div>;

    return (
        <div className="flex flex-col overflow-x-auto">
            <div className="sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-x-auto">
                        {content}
                    </div>
                </div>
            </div>
        </div>
    )
}