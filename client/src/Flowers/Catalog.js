import React, { useState, useEffect} from "react";
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

    useEffect(() => {
        setCheckedState(new Array(flowersToDisplay.length).fill(false)) 
      }, [flowersToDisplay])
      
    function handleAddFlowersToLocation(event) {
        event.preventDefault()
        setCheckedState(new Array(flowersToDisplay.length).fill(false)) 
        if(checkedFlowers.length === 0) {
            updateErrors(["Please choose at least one flower!"])
        }else{
            sendCheckedFlowers(checkedFlowers)
            navigate('/choose-location')
        }
    }

    async function handleFilter(event){
        await changeCurrentTypeFlower(event.target.value)
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

    function myFetch(flowerId) {
        return new Promise(resolve => {

            fetch(`/flowers/${flowerId}`, {
                method: "DELETE"
            }).then(response => resolve(response))
                .catch((errors) => {
                    updateErrors(errors)
            })
        })}

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
                let arrayOfErrors = []
                for (let i = 0; i < jsonBodies.length; i++) {
                   if (jsonBodies[i].errors) {
                    console.log(jsonBodies[i].errors)
                    arrayOfErrors.push(jsonBodies[i].errors)
                   }
                    else {
                        deletedFlowersIds.push(jsonBodies[i])
                    }
                }
                deleteFlower(deletedFlowersIds, arrayOfErrors)
                deletePlantingOperationsByFlowers(deletedFlowersIds)
                setCheckedFlowers([])
            })
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





//useEffect needs to update checkedState when our flowerToDisplay updated. flowersToDispaly get updated
//when  we push Delete button or change type of flowers to display. So we get rid of Warning controll/uncontrol