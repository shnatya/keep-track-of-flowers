import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import ErrorList from "./ErrorList";
import FlowerCard from "./FlowerCard";

function Catalog({flowersToDisplay, sendCheckedFlowers}) {
    const [checkedFlowers, setCheckedFlowers] = useState([])
    const [errors, setErrors] = useState([])
    const navigate=useNavigate()

    function handleAddFlowersToLocation(event) {
        event.preventDefault()
        sendCheckedFlowers(checkedFlowers)
        if(checkedFlowers.length == 0) {
            setErrors(["Please choose at least one flower!"])
        }else{
            navigate('/choose-location')
        }
        
    }

    function addCheckedFlowers(flower) {
        setErrors([])
        let arrayOfCheckedFlowers = checkedFlowers
        let result = arrayOfCheckedFlowers.find(obj => obj === flower)
        if(result === undefined) {
            arrayOfCheckedFlowers = [...arrayOfCheckedFlowers, flower]
            setCheckedFlowers(arrayOfCheckedFlowers)
        }else {
            arrayOfCheckedFlowers = arrayOfCheckedFlowers.filter(obj => obj !== result)
            setCheckedFlowers(arrayOfCheckedFlowers)
        }
    }
    return (
        <div>
            <ErrorList errors={errors}/>
            <form onSubmit={handleAddFlowersToLocation}>
                <button type="submit" className="button">Choose location</button>
                {flowersToDisplay.map((flower, index) => <FlowerCard addFlower={addCheckedFlowers} key={index} flower={flower} />)}
                <button type="submit" className="button">Choose location</button>
            </form>
        </div>
    )
}

export default Catalog;