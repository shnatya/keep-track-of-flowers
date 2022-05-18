import React from "react";

function ByFlowersCard({flower}) {
    console.log(flower)
    return (
        <div className="operation-filter-card">
            <section>
                <h3>{flower.name}</h3>
                <img src={flower.image_url} alt="Flower pic" className="right flower-pic"></img>
            </section>
            <h3>Planted here</h3>
            {flower.arrayOfLocations.map(loc_img_url => <img src={loc_img_url} alt="Location pic" className="location-pic"></img>)}
        </div>
    )

}

export default ByFlowersCard;