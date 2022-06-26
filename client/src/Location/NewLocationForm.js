import React, { useState } from "react";

function NewLocationForm({addNewLocation, updateErrors}) {
    const [newLocation, setNewLocation] = useState({
        name: "",
        description: "",
        image_url: ""
    })
    

    function handleInput(event) {
        updateErrors([])
        setNewLocation({
            ...newLocation,
            [event.target.name]: event.target.value
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        
        addNewLocation(newLocation)
        setNewLocation({
            name: "",
            description: "",
            image_url: ""
        })
    }
    return (
        <>
            <h1>Add New Location</h1>
            <div className="new-location-form">
                <form onSubmit={handleSubmit}>
                    <div className="div-input-order">
                        <label htmlFor="name" className="label">Location type: </label>
                        <input type="text" id="name" name="name" value={newLocation.name} onChange={handleInput} className="input-flower"
                            placeholder="Ground" />
                    </div>
                    <div className="div-input-order">
                        <label htmlFor="description" className="label">Description: </label>
                        <input type="text" id="description" name="description" value={newLocation.description} onChange={handleInput} className="input-flower"
                            placeholder="The ground by the fence with the bell" />
                    </div>
                    <div className="div-input-order">
                        <label htmlFor="image_url" className="label">URL image: </label>
                        <input type="text" id="image_url" name="image_url" value={newLocation.image_url} onChange={handleInput} className="input-flower" />
                    </div>
                    <div>
                        <button className="button-login" type="submit">Submit</button>
                    </div>
                    
                </form>
                
            </div>
        </>
    )
}

export default NewLocationForm;