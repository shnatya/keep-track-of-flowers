import React from "react"

function LocationCard({location, addLocation}) {
    return (
        <div className="mini-card">
            <input type="checkbox" onClick={() => addLocation(location)} id={location.id}></input>
            <h2>{location.description}</h2>
            <img src="../locations/IMG_8974.jpg" className="location-pic"></img>
            
        </div>
    )
}

export default LocationCard;
