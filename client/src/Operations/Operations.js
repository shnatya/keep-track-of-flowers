import React, { useState } from "react";
import OperationCard from "./OperationCard";
import ByFlowersCard from "./ByFlowersCard";

function Operations({operationsToDisplay, changeCurrentOperaionFilter, currentOperationFilter, updateErrors}) {
    const [checkedOperations, setCheckedOperations] = useState([])

    function addCheckedOperation(operation) {
        updateErrors([])
        let arrayOfCheckedOperations = [...checkedOperations]
        let result = arrayOfCheckedOperations.find(obj => obj === operation)
        if(result === undefined) {
            arrayOfCheckedOperations = [...arrayOfCheckedOperations, operation]
            setCheckedOperations(arrayOfCheckedOperations)
        }else {
            arrayOfCheckedOperations = arrayOfCheckedOperations.filter(obj => obj !== result)
            setCheckedOperations(arrayOfCheckedOperations)
        }
    }
    
    /*function handleDeleteOperationButton() {
        let promises = []
        checkedOperations.forEach(operationObj => {
    
            promises.push(myFetch(operationObj.id))})
        let jsonPromises = []
        Promise.all(promises).then(responses => {
            responses.forEach(res => {
                jsonPromises.push(res.json())
            })
            Promise.all(jsonPromises).then(jsonBodies => {
                let deletedOperationsIds = []
                for (let i = 0; i < jsonBodies.length; i++) {
                    let obj = jsonBodies[i]
                    deletedOperationsIds.push(obj)
                }
                deleteOperation(deletedOperationsIds)
                deletePlantingOperations(deletedOperationsIds)
            })
        });
    }
    
    function myFetch(operationId) {
        return new Promise(resolve => {
    
            fetch(`/delete-operation/${operationId}`, {
                method: "DELETE"
            }).then(response => resolve(response))
                .catch((error) => {
                    console.error(error);
            });
        });
    }*/
    return (
        <>
            <h1>Planting operations</h1>
            <h3>Filter:</h3>
            <select onChange={(event) => changeCurrentOperaionFilter(event.target.value)} value={currentOperationFilter}>
                <option value="By default">By default</option>
                <option value="By flowers">By flowers</option>
                <option value="By locations">By locations</option>
            </select>
            {currentOperationFilter === "By default" ?
                <div className="operation-page">
                    {operationsToDisplay.map(operation => <OperationCard operation={operation} key={operation.id} addCheckedOperation={addCheckedOperation}/>)}
                </div>: null}
            {currentOperationFilter === "By flowers" ?
                <div className="flex-container">
                    {operationsToDisplay.map((flower, index) => <ByFlowersCard flower={flower} key={index}/>)}
                </div> : null}
        </>
    )
}

export default Operations;