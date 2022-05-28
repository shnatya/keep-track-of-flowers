import React, { useState} from "react";

function UpdateFlowerForm({flowerNeedToUpdate, updateErrors, handleUpdatedFlower}) {
    const [updatedFlower, setUpdatedFlower] = useState({
        name: flowerNeedToUpdate.name,
        type_species: flowerNeedToUpdate.type_species,
        season: flowerNeedToUpdate.season,
        subseason: flowerNeedToUpdate.subseason,
        color: flowerNeedToUpdate.color,
        height: flowerNeedToUpdate.height,
        description: flowerNeedToUpdate.description,
        image_url: flowerNeedToUpdate.image_url,
        id: flowerNeedToUpdate.id
    })
    
    function handleInput(event) {
        updateErrors([])
        setUpdatedFlower({
            ...updatedFlower,
            [event.target.name]: event.target.value
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        
        handleUpdatedFlower(updatedFlower)
        
    }
    return (
        <>
            <h1>Update the Flower</h1>
            <div className="new-flower-form">
                <form onSubmit={handleSubmit}>
                    <div className="div-flower-input-order">
                        <label htmlFor="name" className="label">Flower name: </label>
                        <input type="text" id="name" name="name" value={updatedFlower.name} onChange={handleInput} className="input-flower" />
                    </div>
                    <div className="div-flower-input-order">
                        <label htmlFor="type" className="label">Type: </label>
                        <input type="text" id="type" name="type_species" value={updatedFlower.type_species} onChange={handleInput} className="input-flower"
                            placeholder="Tulips, Crocuses, ..." />
                    </div>
                    <div className="div-flower-input-order">
                        <label htmlFor="height" className="label">Height: </label>
                        <input type="text" id="height" name="height" value={updatedFlower.height} onChange={handleInput} className="input-flower"
                                placeholder="Specify units of measurement ..." />
                    </div>
                    <div className="div-flower-input-order">
                        <label htmlFor="season" className="label">Season: </label>
                        <input type="text" id="season" name="season" value={updatedFlower.season} onChange={handleInput} className="input-flower" />
                    </div>
                    <div className="div-flower-input-order">
                        <label htmlFor="subseason" className="label">Subseason: </label>
                        <input type="text" id="subseason" name="subseason" value={updatedFlower.subseason} onChange={handleInput} className="input-flower"
                                placeholder="Early, Mid, Late" />
                    </div>
                    <div className="div-flower-input-order">
                        <label htmlFor="color" className="label">Color: </label>
                        <input type="text" id="color" name="color" value={updatedFlower.color} onChange={handleInput} className="input-flower" />
                    </div>
                    <div className="div-flower-input-order">
                        <label htmlFor="description" className="label">Description: </label>
                        <input type="text" id="description" name="description" value={updatedFlower.description} onChange={handleInput} className="input-flower" />
                    </div>
                    <div className="div-flower-input-order">
                        <label htmlFor="image_url" className="label">URL image: </label>
                        <input type="text" id="image_url" name="image_url" value={updatedFlower.image_url} onChange={handleInput} className="input-flower" />
                    </div>
                    <div>
                        <button className="button-login" type="submit">Submit</button>
                    </div>
                    
                </form>
                
            </div>
        </>
    )
}

export default UpdateFlowerForm;