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
        debugger
        (async () => {
            for (let iFl = 0; iFl < finalCheckedFlowers.length; iFl++){
                debugger
                (async () => {
                    for (let iLoc = 0; iLoc < checkedLocations.length; iLoc++){
                        debugger
                        let objOperation = Object.assign({}, {flower_id: finalCheckedFlowers[iFl].id, location_id: checkedLocations[iLoc].id})
                        debugger
                        const response = await fetch( "/create-planting-operations", {
                            method: "POST",
                            headers: {
                            "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                planting: objOperation
                            })
                        });
                        debugger
                        const data = await response.json()
                        debugger
                        if (response.ok) {
                            updatePlantingOperations(data)
                            debugger
                        }else {
                            console.log(data.errors)
                        }   
                        debugger
                    }
                })()
            }
        })() 
           /* finalCheckedFlowers.forEach(flower => checkedLocations.forEach(location => (async () => { {
                let objOperation = Object.assign({}, {flower_id: flower.id, location_id: location.id})
                debugger
                const response = await fetch( "/create-planting-operations", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        planting: objOperation
                    })
                  });
                  const data = await response.json()
                  if (response.ok) {
                    updatePlantingOperations(data)
                    debugger
                  }else {
                      console.log(data.errors)
                  }    
    }  })())
    )   */
        navigate("/planting-operations")
      }
 
/*
const start = async () => {
  await asyncForEach([1, 2, 3], async (num) => {
    await waitFor(50);
    console.log(num);
  });
  console.log('Done');
}
start();

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}*/
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

/*// wait for the array of results
let results = await Promise.all([
  fetch(url1),
  fetch(url2),
  ...
]); */