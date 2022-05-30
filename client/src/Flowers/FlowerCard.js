import React from "react";
import { useNavigate } from "react-router";

function FlowerCard({flower, updateCheckedState, updateErrors, addCheckedFlowers, extractFlowerObjById, checkboxId, checkedValue}) {
    const navigate = useNavigate()
    console.log(checkedValue)

    function handleUpdateFlower(event) {
        extractFlowerObjById(event.target.id)
        updateErrors([])
        navigate('/update-flower')
    }

    function handleOnChange(event) {
        console.log(event)
        addCheckedFlowers(flower)
       updateCheckedState(event.target.id)
    }
    
    return (
        <div className="card">
             <div className="div">
                <input type="checkbox" onChange={handleOnChange} id={checkboxId} name={flower.name} value={flower.name}
                        checked={checkedValue} className="between-text"></input>
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