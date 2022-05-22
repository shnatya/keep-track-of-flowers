import React from "react";  
import Error from "./Error"

function ErrorList({errors}) {
    let errorList = errors.map((error, index) => <Error key={index} error={error} />);
    return (
        <div className="container">
             <ul className="errors between-text">
                {errorList}
            </ul>
        </div>
        
    )
}

export default ErrorList;

