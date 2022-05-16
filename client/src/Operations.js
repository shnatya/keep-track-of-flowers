import React from "react";
import OperationCard from "./OperationCard";
import ByFlowersCard from "./ByFlowersCard";

function Operations({operationsToDisplay, changeCurrentOperaionFilter, currentOperationFilter}) {

    return (
        <>
            <select onChange={(event) => changeCurrentOperaionFilter(event.target.value)} value={currentOperationFilter}>
                <option value="By default">By default</option>
                <option value="By flowers">By flowers</option>
                <option value="By locations">By locations</option>
            </select>
            <h1>Planting operations</h1>
            {currentOperationFilter === "By default" ? <div className="operation-page">
                {operationsToDisplay.map(operation => <OperationCard operation={operation} key={operation.id}/>)}
            </div>: null}
            {currentOperationFilter === "By flowers" ? <div className="flex-container">
                {operationsToDisplay.map((flower, index) => <ByFlowersCard flower={flower} key={index}/>)}
            </div> : null}
        </>
    )
}

export default Operations;