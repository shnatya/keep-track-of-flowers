import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import ErrorList from "./ErrorList";
import FlowerCard from "./FlowerCard";

function Catalog({flowersToDisplay, sendCheckedFlowers, currentTypeFlower, deleteFlower,
                    changeCurrentTypeFlower, arrayOfTypes, deletePlantingOperations, showFlowerMessage, updateFlowerMessage}) {
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

    function handleAddFlowerButton() {
        updateFlowerMessage(false)
    }

    function handleDeleteFlowerButton(event) {
       // event.preventDefault()
        
        let promises = []
        checkedFlowers.forEach(flowerObj => {

            promises.push(myFetch(flowerObj.id))})
        let jsonPromises = []
        Promise.all(promises).then(responses => {
            responses.forEach(res => {
                jsonPromises.push(res.json())
            })
            Promise.all(jsonPromises).then(jsonBodies => {
                let deletedFlowersIds = []
                for (let i = 0; i < jsonBodies.length; i++) {
                    let obj = jsonBodies[i]
                    deletedFlowersIds.push(obj)
                }
                deleteFlower(deletedFlowersIds)
                deletePlantingOperations(deletedFlowersIds)
            })
            
        });
    }

    function myFetch(flowerId) {
        return new Promise(resolve => {

            fetch(`/delete-flower/${flowerId}`, {
                method: "DELETE"
            }).then(response => resolve(response))
                .catch((error) => {
                    console.error(error);
            });
        });
    }

    function handleUpdateFlowerButton() {
        
    }
    return (
        <div className="div">
            <ErrorList errors={errors} className="between-text"/>
            <h1>Catalog</h1>
            <select onChange={(event) => handleFilter(event)} value={currentTypeFlower}>
                <option value="All">All</option>
                {typeOptions}
            </select>
            <button onClick={handleAddFlowerButton} className="btn-add-flower">Add</button>
            <button onClick={handleDeleteFlowerButton} className="btn-add-flower">Delete</button>
            <button onClick={handleUpdateFlowerButton} className="btn-add-flower">Update</button>
            <h3>Choose flower(-s) to plant:</h3>
            {showFlowerMessage ? <h1 style={{color: "green"}}>No more flowers left. Do you want to add new?</h1> : null}
            <form onSubmit={handleAddFlowersToLocation}>
                {flowersToDisplay.map((flower, index) => <FlowerCard addFlower={addCheckedFlowers} key={index} flower={flower} />)}
                <button type="submit" className="button-flowers">Next step</button>
            </form>
        </div>
    )
}

export default Catalog;

