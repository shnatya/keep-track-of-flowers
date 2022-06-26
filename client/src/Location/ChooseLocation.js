import React, { useState } from 'react';
import LocationCard from './LocationCard';
import { useNavigate } from 'react-router';

function ChooseLocation({user, arrayOfUniqueLocations, addPlantingOperations, finalCheckedFlowers,
                        changeCurrentOperaionFilter, updateErrors, deleteLocation}) {
    const [checkedLocations, setCheckedLocations] = useState([])
    
    const navigate = useNavigate()
    let arrayOfLocations = arrayOfUniqueLocations.map(location => <LocationCard key={location.id}location={location} addLocation={addLocation} handleDeleteLocationButton={handleDeleteLocationButton}/> )

    function addLocation(location) {
        updateErrors([])
        let arrayOfCheckedLocations = checkedLocations
        let result = arrayOfCheckedLocations.find(obj => obj === location)
        if(result === undefined) {
            arrayOfCheckedLocations = [...arrayOfCheckedLocations, location]
            setCheckedLocations(arrayOfCheckedLocations)
        }else {
            arrayOfCheckedLocations = arrayOfCheckedLocations.filter(obj => obj !== result)
            setCheckedLocations(arrayOfCheckedLocations)
        }}

    function myFetch(objOperation) {
        
        return fetch("/planting_operations", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    planting: objOperation})
            })}

    function handlePlantFlowers(event) {
        event.preventDefault()
        changeCurrentOperaionFilter("By default")
        let promises = [];
        
        if(finalCheckedFlowers.length !== 0 && checkedLocations.length !== 0) {
            finalCheckedFlowers.forEach(flower => checkedLocations.forEach(location => {
            let objOperation = Object.assign({}, { flower_id: flower.id, location_id: location.id, user_id: user.id})
            promises.push(myFetch(objOperation))
        })
        )
        let jsonPromises = []
        Promise.all(promises).then(responses => {
            responses.forEach(res => jsonPromises.push(res.json()))

            Promise.all(jsonPromises).then(jsonBodies => {
                let newObjects = []
                let newMessages =[]
                for (let i = 0; i < jsonBodies.length; i++) {
                    if(jsonBodies[i].errors) {
                        newMessages.push(jsonBodies[i].errors)
                    }else{
                        let obj = jsonBodies[i]
                        newObjects.push(obj)
                        newMessages.push(`SUCCESS! ${obj.flower.name} has been planted at ${obj.location.description}.`)
                    }}
                addPlantingOperations(newObjects, newMessages)
            })
        });
        navigate("/planting-operations")

        }else {
            updateErrors(["Both flowers and locations have to be selected for planting!"])}
      }
    
    function handleDeleteLocationButton(location) {
    fetch(`/locations/${location.id}`, {
        method: "DELETE"})
        .then(res => res.json())
        .then(locationObj => {
            if(locationObj.errors) {
                updateErrors(locationObj.errors)}
            else{
                deleteLocation(locationObj)}
            })
    }
    function handleAddLocationButton() {
    //updateFlowerMessage(false)
    updateErrors([])
    navigate('/add-new-location')
    }

    return(
        <div className='div'>
             <h1>Catalog of your locations</h1>
            <button onClick={handleAddLocationButton} className="btn-flower">Add</button>
            <h3>Choose location(-s): </h3>
            {arrayOfUniqueLocations.length === 0 ? <h3 style={{color: "green"}}>You haven't added locations yet.</h3> : null}
            <form onSubmit={handlePlantFlowers}>
                {arrayOfLocations}
                <button type="submit" className="button-plant">Plant</button>
            </form>
        </div>
    )
}

export default ChooseLocation;