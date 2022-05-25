import React from "react";

function OperationCard({operation, handleDeleteOperationButton}) {
    
    return (
        <div className="operation-card flex-container">
            <div className="div-operation-delete">
                <button type="button" onClick={() => handleDeleteOperationButton(operation)} id={operation.id} className="button-operation-delete">X</button>
            </div>
            
            <img src={operation.flower.image_url} alt="Flower name" className="flower-pic"></img>
            <img src={operation.location.image_url} alt="Location name" className="location-pic"></img>
        </div>
    )

}

export default OperationCard;


