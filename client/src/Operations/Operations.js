import React from "react";
import OperationCard from "./OperationCard";
import ByFlowersCard from "./ByFlowersCard";

function Operations({operationsToDisplay, changeCurrentOperaionFilter, currentOperationFilter, deletePlantingOperation}) {

    
    function handleDeleteOperationButton(operation) {
        fetch(`/planting_operation/${operation.id}`, {
            method: "DELETE"})
            .then(res => res.json())
            .then(operationObj => {
                deletePlantingOperation(operationObj)})
    }
    console.log(operationsToDisplay)
    return (
        <>
            <h1>Planting operations</h1>
            <h3>Filter:</h3>
            <select onChange={(event) => changeCurrentOperaionFilter(event.target.value)} value={currentOperationFilter}>
                <option value="By default">By default</option>
                <option value="By flowers">By flowers</option>
            </select>
            {currentOperationFilter === "By default" ?
                <div className="operation-page">
                    {operationsToDisplay.map(operation => <OperationCard operation={operation} key={operation.id}
                                            handleDeleteOperationButton={handleDeleteOperationButton}/>)}
                </div>: null}
            {currentOperationFilter === "By flowers" ?
                <div className="flex-container">
                    {operationsToDisplay.map((flower, index) => <ByFlowersCard flower={flower} key={index}/>)}
                </div> : null}
        </>
    )
}

export default Operations;