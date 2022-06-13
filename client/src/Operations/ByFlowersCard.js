import React from "react";

function ByFlowersCard({flowerURL, locationsURLs}) {
   
    return (
        <div className="operation-filter-card">
            <section>
                <img src={flowerURL} alt="Flower pic" className="right flower-pic"></img>
            </section>
            <h3>Locations</h3>
            {locationsURLs.map((url, index) => <img src={url} key={index} alt="Location pic" className="location-pic"></img>)}
        </div>
    )

}

export default ByFlowersCard;