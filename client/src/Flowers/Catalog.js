import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import FlowerCard from "./FlowerCard";

function Catalog({flowersToDisplay, sendCheckedFlowers, currentTypeFlower, deleteFlower,
                    changeCurrentTypeFlower, arrayTypesOfFlowers, deletePlantingOperationsByFlowers, showFlowerMessage,
                    updateFlowerMessage, updateErrors, extractFlowerObjById}) {
    const [checkedFlowers, setCheckedFlowers] = useState([])
    const [checkedState, setCheckedState] = useState(new Array(flowersToDisplay.length).fill(false))
    const navigate=useNavigate()
                
    let typeOptions = arrayTypesOfFlowers.map(type => {
        return (
            <option key={type} value={type}>{type}</option>
        )
    })

    function handleAddFlowersToLocation(event) {
        event.preventDefault()
        setCheckedState(new Array(flowersToDisplay.length).fill(false)) ///?????added
        if(checkedFlowers.length === 0) {
            updateErrors(["Please choose at least one flower!"])
        }else{
            sendCheckedFlowers(checkedFlowers)
            navigate('/choose-location')
        }
    }

    function handleFilter(event){
        
        changeCurrentTypeFlower(event.target.value)
        setCheckedState(new Array(flowersToDisplay.length).fill(false)) ///?????added
        setCheckedFlowers([])
        updateErrors([])
    }

    function addCheckedFlowers(flower) {
        updateErrors([])
        let arrayOfCheckedFlowers = [...checkedFlowers]
        let result = arrayOfCheckedFlowers.find(obj => obj === flower)
        if(result === undefined) {
            arrayOfCheckedFlowers = [...arrayOfCheckedFlowers, flower]
            setCheckedFlowers(arrayOfCheckedFlowers)
        }else {
            arrayOfCheckedFlowers = arrayOfCheckedFlowers.filter(obj => obj !== result)
            setCheckedFlowers(arrayOfCheckedFlowers)
        }
    }
    function updateCheckedState(position) {
        const updatedArrayOfCheckboxes = checkedState.map((item, index) => parseInt(position) === index ? !item : item)
        setCheckedState(updatedArrayOfCheckboxes)
    }

    function handleAddFlowerButton() {
        updateFlowerMessage(false)
        updateErrors([])
        navigate('/add-new-flower')
    }

    function handleDeleteFlowerButton() {
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
                deletePlantingOperationsByFlowers(deletedFlowersIds)
                setCheckedState(new Array(flowersToDisplay.length - deletedFlowersIds.length).fill(false)) ////????
                setCheckedFlowers([])
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
    
    return (
        <div className="div">
            <h1>Catalog</h1>
            <select onChange={(event) => handleFilter(event)} value={currentTypeFlower} >
                <option value="All">All</option>  
                {typeOptions}
            </select>
            <button onClick={handleAddFlowerButton} className="btn-flower">Add</button>
            <button onClick={handleDeleteFlowerButton} className="btn-flower">Delete</button>
           
            <h3>Choose flower(-s) to plant:</h3>
            {showFlowerMessage ? <h1 style={{color: "green"}}>No more flowers left. Do you want to add new?</h1> : null}
            <form onSubmit={handleAddFlowersToLocation}>
                {flowersToDisplay.map((flower, index) => <FlowerCard addCheckedFlowers={addCheckedFlowers} checkboxId={index} key={index} flower={flower} 
                                                                        checkedValue={checkedState[index]} extractFlowerObjById={extractFlowerObjById}
                                                                        updateCheckedState={updateCheckedState} updateErrors={updateErrors}/>)}
                <button type="submit" className="button-flowers">Next step</button>
            </form>
        </div>
    )
}

export default Catalog;

