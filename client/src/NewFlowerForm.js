import React, { useState } from "react";

function NewFlowerForm({addNewFlower, updateErrors}) {
    const [newFlower, setNewFlower] = useState({
        name: "",
        type_species: "",
        season: "",
        subseason: "",
        color: "",
        height: "",
        description: "",
        image_url: ""
    })
    

    function handleInput(event) {
        updateErrors([])
        setNewFlower({
            ...newFlower,
            [event.target.name]: event.target.value
        })
        console.log(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        
        addNewFlower(newFlower)
        setNewFlower({
            name: "",
            type_species: "",
            season: "",
            subseason: "",
            color: "",
            height: "",
            description: "",
            image_url: ""
        })
    }
    return (
        <>
            <h1>Add New Flower</h1>
            <div className="new-flower-form">
                <form onSubmit={handleSubmit}>
                    <div className="div-flower-input-order">
                        <label htmlFor="name" className="label">Flower name: </label>
                        <input type="text" id="name" name="name" value={newFlower.name} onChange={handleInput} className="input-flower" />
                    </div>
                    <div className="div-flower-input-order">
                        <label htmlFor="type" className="label">Type: </label>
                        <input type="text" id="type" name="type_species" value={newFlower.type_species} onChange={handleInput} className="input-flower"
                            placeholder="Tulips, Crocuses, ..." />
                    </div>
                    <div className="div-flower-input-order">
                        <label htmlFor="height" className="label">Height: </label>
                        <input type="text" id="height" name="height" value={newFlower.height} onChange={handleInput} className="input-flower"
                                placeholder="Specify units of measurement ..." />
                    </div>
                    <div className="div-flower-input-order">
                        <label htmlFor="season" className="label">Season: </label>
                        <input type="text" id="season" name="season" value={newFlower.season} onChange={handleInput} className="input-flower" />
                    </div>
                    <div className="div-flower-input-order">
                        <label htmlFor="subseason" className="label">Subseason: </label>
                        <input type="text" id="subseason" name="subseason" value={newFlower.subseason} onChange={handleInput} className="input-flower"
                                placeholder="Early, Mid, Late" />
                    </div>
                    <div className="div-flower-input-order">
                        <label htmlFor="color" className="label">Color: </label>
                        <input type="text" id="color" name="color" value={newFlower.color} onChange={handleInput} className="input-flower" />
                    </div>
                    <div className="div-flower-input-order">
                        <label htmlFor="description" className="label">Description: </label>
                        <input type="text" id="description" name="description" value={newFlower.description} onChange={handleInput} className="input-flower" />
                    </div>
                    <div className="div-flower-input-order">
                        <label htmlFor="image_url" className="label">URL image: </label>
                        <input type="text" id="image_url" name="image_url" value={newFlower.image_url} onChange={handleInput} className="input-flower" />
                    </div>
                    <div>
                        <button className="button-login" type="submit">Submit</button>
                    </div>
                    
                </form>
                
            </div>
        </>
    )
}

export default NewFlowerForm;