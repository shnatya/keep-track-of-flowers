import React from "react"

function LocationCard({location, addLocation, handleDeleteLocationButton}) {
    return (
        <div className="mini-card">
            <div className="div">
                <input type="checkbox" onClick={() => addLocation(location)} id={location.id}></input>
                <button type="button" onClick={() => handleDeleteLocationButton(location)} id={location.id} className="button-location-delete">X</button>
            </div>
            <h4>{location.description}</h4>
            <img src={location.image_url} className="location-pic"></img>
            
        </div>
    )
}

export default LocationCard;
