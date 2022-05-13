import React from "react";

function Operations({plantingOperations}) {
    return (
        <div>
            <h1>PlantingOperation</h1>
            {plantingOperations.map(operation => console.log(operation.flower.name + operation.location.name
                ))}
        </div>
    )
}

export default Operations;