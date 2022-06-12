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
            <h1>Your planting operations</h1>
            {operationsToDisplay.length === 0 ? null: <h3>Filter:</h3>}
            {operationsToDisplay.length === 0 ? null : <select onChange={(event) => changeCurrentOperaionFilter(event.target.value)} value={currentOperationFilter}>
                <option value="By default">By default</option>
                <option value="By flowers">By flowers</option>
            </select>}
            {operationsToDisplay.length === 0 ? <h3 style={{color: "green"}}>You haven't planted flowers yet. If you'd like to plant, go back to Flowers and plant some.</h3> : null}
            {currentOperationFilter === "By default" ?
                <div className="operation-page">
                    {operationsToDisplay.map(operation => <OperationCard operation={operation} key={operation.id}
                                            handleDeleteOperationButton={handleDeleteOperationButton}/>)}
                </div>: null}
            {currentOperationFilter === "By flowers" ?
                <div className="flex-container">
                    {Object.entries(operationsToDisplay).map(([key, value]) => <ByFlowersCard flowerURL={key} locationsURLs={value} key={key}/>)}
                </div> : null}
        </>
    )
}

export default Operations;