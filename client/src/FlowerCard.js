import React from "react";
import { useNavigate } from "react-router";

function FlowerCard({flower, addFlower, extractFlowerObjById}) {
    const navigate = useNavigate()

    function handleUpdateFlower(event) {
        extractFlowerObjById(event.target.id)
        navigate('/update-flower')
    }
    
    return (
        <div className="card">
             <div className="div">
                <input type="checkbox" onClick={() => addFlower(flower)} id={flower.name} name={flower.name} value={flower.name}
                        className="between-text"></input>
                <button type="button" id={flower.id} onClick={handleUpdateFlower} className="button-flowers-update">🛠</button>
            </div>
            <h2 className="between-text">{flower.name}</h2> 
            <img src = {flower.image_url} className = "flower-pic" alt={flower.type_species}></img>
            <h4 className="between-text">Height: {flower.height}</h4>
            <h4 className="between-text">Subseason: {flower.subseason}</h4>
        </div>
    )
}

export default FlowerCard;