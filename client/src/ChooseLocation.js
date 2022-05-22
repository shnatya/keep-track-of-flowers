import React, { useState } from 'react';
import LocationCard from './LocationCard';
import { useNavigate } from 'react-router';

function ChooseLocation({arrayOfUniqueLocations, addPlantingOperations, finalCheckedFlowers, sendCheckedLocations,
                        changeCurrentOperaionFilter}) {
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
        return new Promise(resolve => {
            fetch("/create-planting-operations", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    planting: objOperation
                })
            }).then(response => resolve(response))
                .catch((error) => {
                    console.error(error);
            });
        });
    }

    function handlePlantFlowers(event) {
        event.preventDefault()
        sendCheckedLocations(checkedLocations)
        changeCurrentOperaionFilter("By default")

        let promises = [];
        finalCheckedFlowers.forEach(flower => checkedLocations.forEach(location => {
            let objOperation = Object.assign({}, { flower_id: flower.id, location_id: location.id })
            promises.push(myFetch(objOperation))
        })
        )
        let jsonPromises = []
        Promise.all(promises).then(responses => {
            responses.forEach(res => jsonPromises.push(res.json()))

            Promise.all(jsonPromises).then(jsonBodies => {
                let newObjects = [];
                for (let i = 0; i < jsonBodies.length; i++) {
                    let obj = jsonBodies[i]
                    newObjects.push(obj)
                }
                addPlantingOperations(newObjects)
            })
        });
           
        navigate("/planting-operations")
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
