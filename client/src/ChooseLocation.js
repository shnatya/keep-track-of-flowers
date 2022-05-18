import React, { useState } from 'react';
import LocationCard from './LocationCard';
import { useNavigate } from 'react-router';

function ChooseLocation({arrayOfUniqueLocations, updatePlantingOperations, finalCheckedFlowers, sendCheckedLocations}) {
    const [checkedLocations, setCheckedLocations] = useState([])

    const navigate = useNavigate()

   // let arrayOfCheckedFlowers = finalCheckedFlowers.map(flower => <MiniCard key={flower.name} flower={flower}/>)
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

    function handlePlantFlowers(event) {
        event.preventDefault()
        sendCheckedLocations(checkedLocations)
       
        finalCheckedFlowers.forEach(flower => checkedLocations.forEach(location => {
                    let objOperation = Object.assign({}, {flower_id: flower.id, location_id: location.id})
                    debugger
                    fetch( "/create-planting-operations", {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            planting: objOperation
                        })
                      })
                      .then(res => res.json()
                      .then(newOperation => updatePlantingOperations(newOperation)))
        })
        )
        navigate("/planting-operations")
      }
    return(
        <div className='div'>
            <h1>Choose location(-s): </h1>
            <form onSubmit={handlePlantFlowers}>
                {arrayOfLocations}
                <button type="submit" className="button">Plant</button>
            </form>
        </div>
    )
}

export default ChooseLocation;