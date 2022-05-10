import React from "react";  
import Error from "./Error"

function ErrorList({errors}) {
    let errorList = errors.map((error, index) => <Error key={index} error={error}/>);
    return (
        <ul className="errors">
            {errorList}
        </ul>
    )
}

export default ErrorList;

