import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import ErrorList from "./ErrorList";
import FlowerCard from "./FlowerCard";

function Catalog({flowersToDisplay, sendCheckedFlowers, currentTypeFlower, changeCurrentTypeFlower, arrayOfTypes}) {
    const [checkedFlowers, setCheckedFlowers] = useState([])
    const [errors, setErrors] = useState([])
    const navigate=useNavigate()

    let typeOptions = arrayOfTypes.map(type => {
        return (
            <option key={type} value={type}>{type}</option>
        )
    })

    function handleAddFlowersToLocation(event) {
        event.preventDefault()
        sendCheckedFlowers(checkedFlowers)
        if(checkedFlowers.length === 0) {
            setErrors(["Please choose at least one flower!"])
        }else{
            navigate('/choose-location')
        }
        
    }

    function handleFilter(event){
        changeCurrentTypeFlower(event.target.value)
        setErrors([])
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
        <div className="div">
            <ErrorList errors={errors} className="between-text"/>
            <select onChange={(event) => handleFilter(event)} value={currentTypeFlower}>
                <option value="All">All</option>
                {typeOptions}
            </select>
            <h1>Catalog</h1>
            <h3>Choose flower(-s) to plant:</h3>
            <form onSubmit={handleAddFlowersToLocation}>
                
                {flowersToDisplay.map((flower, index) => <FlowerCard addFlower={addCheckedFlowers} key={index} flower={flower} />)}
                <button type="submit" className="button-flowers">Next step</button>
            </form>
        </div>
    )
}

export default Catalog;

