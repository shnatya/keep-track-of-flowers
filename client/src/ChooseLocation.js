import React, { useState } from 'react';
import MiniCard from './MiniCard';
import LocationCard from './LocationCard';

function ChooseLocation({arrayOfUniqueLocations, finalCheckedFlowers, sendCheckedLocations}) {
    const [checkedLocations, setCheckedLocations] = useState([])

    let arrayOfCheckedFlowers = finalCheckedFlowers.map(flower => <MiniCard key={flower.name} flower={flower}/>)
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
        }
        console.log(arrayOfCheckedLocations)
    }
    function handlePlantFlowers(event){
        event.preventDefault()
        sendCheckedLocations(checkedLocations)
        //navigate('/choose-location')
    }
    return(
        <>
            <div className='card'>
                <h1>Plant these flower(-s) here: </h1>
                {arrayOfCheckedFlowers}
            </div>
            <div className='card'>
                <form onSubmit={handlePlantFlowers}>
                    <button type="submit" className="button">Plant flowers</button>
                    {arrayOfLocations}
                    <button type="submit" className="button">Plant flowers</button>
                </form>
        </div>
        </>
    )
}

export default ChooseLocation;