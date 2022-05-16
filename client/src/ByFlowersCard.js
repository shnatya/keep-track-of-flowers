import React from "react";

function ByFlowersCard({flower}) {
    console.log(flower)
    return (
        <div className="operation-filter-card">
            <h3>{flower.name}</h3>
            <img src={flower.image_url} alt="Flower pic" className="right flower-pic"></img>
            {flower.arrayOfLocations.map(loc_img_url => <img src={loc_img_url} alt="Location pic" className="location-pic location-shadow"></img>)}
        </div>
    )

}

export default ByFlowersCard;