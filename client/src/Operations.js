import React from "react";
import OperationCard from "./OperationCard";

function Operations({plantingOperations, changeCurrentOperaionFilter, currentOperationFilter}) {

    return (
        <>
            <select onChange={(event) => changeCurrentOperaionFilter(event.target.value)} value={currentOperationFilter}>
                <option value="By default">By default</option>
                <option value="By flowers">By flowers</option>
                <option value="By locations">By locations</option>
            </select>
            <h1>Planting operations</h1>
            <div className="operation-page">
                {plantingOperations.map(operation => <OperationCard operation={operation} key={operation.id}/>)}
            </div>
        </>
    )
}

export default Operations;