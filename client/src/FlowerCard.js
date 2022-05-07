import React from "react";

function FlowerCard({flower}) {
    return (
        <div className="card">
           <h2>{flower.name}</h2> 
           <img src = {flower.image_url} class = "flower-pic"></img>
           <h4>Height: {flower.height}</h4>
           <h4>Season: {flower.season}</h4>
           
        </div>
    )
}

export default FlowerCard;