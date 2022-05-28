import React from "react"

function LocationCard({location, addLocation}) {
    return (
        <div className="mini-card">
            <input type="checkbox" onClick={() => addLocation(location)} id={location.id}></input>
            <h4>{location.description}</h4>
            <img src={location.image_url} className="location-pic"></img>
            
        </div>
    )
}

export default LocationCard;