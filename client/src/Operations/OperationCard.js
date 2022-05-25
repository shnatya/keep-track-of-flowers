import React from "react";

function OperationCard({operation, addCheckedOperation}) {
    
    return (
        <div className="operation-card flex-container">
            <input type="checkbox" onClick={() => addCheckedOperation(operation)} id={operation.id} className="between-text"></input>
            <img src={operation.flower.image_url} alt="Flower name" className="flower-pic"></img>
            <img src={operation.location.image_url} alt="Location name" className="location-pic"></img>
        </div>
    )

}

export default OperationCard;


