import React from "react";

function FlowerCard({flower, addFlower}) {
    
    return (
        <div className="card">
            <input type="checkbox" onClick={() => addFlower(flower)} id={flower.name} name={flower.name} value={flower.name}></input>
            <h2>{flower.name}</h2> 
            <img src = {flower.image_url} className = "flower-pic"></img>
            <h4>Height: {flower.height}</h4>
            <h4>Season: {flower.subseason}</h4>
           
        </div>
    )
}

export default FlowerCard;