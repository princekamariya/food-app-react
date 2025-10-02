import React from "react";
import { useRouteError } from "react-router";

const Error = () => {
    const err = useRouteError();
    return (
        <div>
            <h1>Error</h1>
            <h4>Something went wrong!</h4>
            <h5>
                {err.status}: {err.statusText}
            </h5>
        </div>
    );
};

export default Error;
