import React, { useState } from 'react';
import LocationCard from './LocationCard';
import { useNavigate } from 'react-router';

function ChooseLocation({arrayOfUniqueLocations, addPlantingOperations, finalCheckedFlowers,
                        changeCurrentOperaionFilter, updateErrors}) {
    const [checkedLocations, setCheckedLocations] = useState([])

    const navigate = useNavigate()
    let arrayOfLocations = arrayOfUniqueLocations.map(location => <LocationCard key={location.id} location={location} addLocation={addLocation}/> )

    function addLocation(location) {
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
        
        return fetch("/create-planting-operations", {
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
        if(finalCheckedFlowers.length !== 0) {
            finalCheckedFlowers.forEach(flower => checkedLocations.forEach(location => {
            let objOperation = Object.assign({}, { flower_id: flower.id, location_id: location.id })
            promises.push(myFetch(objOperation))
        })
        )
        let jsonPromises = []
        Promise.all(promises).then(responses => {
            responses.forEach(res => jsonPromises.push(res.json()))

            Promise.all(jsonPromises).then(jsonBodies => {
                let newObjects = []
                let newErrors =[]
                for (let i = 0; i < jsonBodies.length; i++) {
                    if(jsonBodies[i].errors) {
                        newErrors.push(jsonBodies[i].errors)
                    }else{
                        let obj = jsonBodies[i]
                        newObjects.push(obj)
                        newErrors.push(`${obj.flower.name} has been planted ${obj.location.description}`)
                    }}
                addPlantingOperations(newObjects, newErrors)
            })
        });
           
        navigate("/planting-operations")
        }else {
            updateErrors(["First choose flowers to plant."])}
      }

    return(
        <div className='div'>
            <h3>Choose location(-s): </h3>
            <form onSubmit={handlePlantFlowers}>
                {arrayOfLocations}
                <button type="submit" className="button-plant">Plant</button>
            </form>
        </div>
    )
}

export default ChooseLocation;