import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from "react-router-dom";
import SignUp from './Log/SignUp';
import Intro from './Intro';
import Login from './Log/Login';
import Header from './Header';
import ChooseLocation from './Location/ChooseLocation'
import Operations from './Operations/Operations';
import Catalog from './Flowers/Catalog';
import NewFlowerForm from './Flowers/NewFlowerForm';
import UpdateFlowerForm from './Flowers/UpdateFlowerForm'

//need to update array of locations for new planted flower when filter by flower
function App() {
  const [flowers, setFlowers] = useState([])
  const [arrayTypesOfFlowers, setArrayTypesOfFlowers] = useState([])
  const [showFlowerMessage, setShowFlowerMessage] = useState(false)
  const [flowerNeedToUpdate, setFlowerNeedToUpdate] = useState({})
  const [currentTypeFlower, setCurrentTypeFlower] = useState("All")
  const [flowersToDisplay, setFlowersToDisplay] = useState([])
  const [finalCheckedFlowers, setFinalCheckedFlowers] = useState([])
  
  const [plantingOperations, setPlantingOperations] = useState([])
  const [currentOperationFilter, setCurrentOperationFilter] = useState("By default")
  const [operationsToDisplay, setOperationsToDisplay] = useState([])
  
  const [arrayOfUniqueLocations, setArrayOfUniqueLocations] = useState([])

  const [user, setUser] = useState(null)
  const [errors, setErrors] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    fetch("/me").then(res => {
      if(res.ok) {
        res.json().then(user => {
          onLogin(user)})} 
    })
  }, [])

  function onLogin(user) {
    setUser(user)
  }

  function updateErrors(newErrors) {
    setErrors(newErrors)
  }

//----------------------------Flowers----------------------------------//
  useEffect(() => {
      fetch("/flowers")
      .then(res => res.json())
      .then(data => {
      
        setFlowers(data)
        setFlowersToDisplay(data)
        collectTypeSpecies(data)
      })
    }, [])

  function addNewFlower(newFlower) {
    fetch("/add-new-flower", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({...newFlower, user_id: user.id})
    })
    .then(res => res.json()
    .then(data => {
      if(data.errors) {
        updateErrors(data.errors)
      }else {     
        setFlowers([...flowers, data])
        collectTypeSpecies([...flowers, data])
        setCurrentTypeFlower("All") 
        setFlowersToDisplay([data, ...flowers])
        navigate('/catalog')
      }
    }))
  }

  function handleUpdatedFlower(updatedFlower) {
    fetch(`/update-flower/${updatedFlower.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({...updatedFlower, user_id: user.id})
    })
    .then(res => res.json()
    .then(data => {
      if(data.errors) {
        updateErrors(data.errors)
      }else { 
        debugger
        addUpdatedFlowerToFlowerDB(data)
        collectTypeSpecies([...flowers, data])
      
        setCurrentTypeFlower("All") 
        //setFlowersToDisplay([data, ...flowers])
        navigate('/catalog')
      }
    }))
  }

  function addUpdatedFlowerToFlowerDB(updatedFlower) {
    let updatedFlowerDB = []
    debugger
    updatedFlowerDB = flowers.map(flower => {
      return flower.id === updatedFlower.id ? updatedFlower : flower})
    
      setFlowers(updatedFlowerDB)
      setFlowersToDisplay(updatedFlowerDB)
  }

  function collectTypeSpecies(flowersArray) {
    let typeSpeciesArray = []
    flowersArray.forEach(flower => {
      let result = typeSpeciesArray.find(el => el === flower.type_species)
      if (result === undefined) {
        typeSpeciesArray = [...typeSpeciesArray, flower.type_species]
      }})
    setArrayTypesOfFlowers(typeSpeciesArray)
  }

  function changeCurrentTypeFlower(type) {
    setCurrentTypeFlower(type)
    updateFlowersToDisplayByType(type) 
  }
  
  function updateFlowersToDisplayByType(type) {
    setCurrentTypeFlower(type)
    if(type === "All") {
      setFlowersToDisplay(flowers)
    }else {
      let newArray = []
      newArray = flowers.filter(flower => type === flower.type_species)
      setFlowersToDisplay(newArray)
    }
  }

  function deleteFlower(arrayOfDeletedFlowersIds) {
    debugger
    let newArrayOfFlowers = [...flowers]
    arrayOfDeletedFlowersIds.forEach(id => {
      newArrayOfFlowers = newArrayOfFlowers.filter(flower => flower.id !== id)
    })
    if(newArrayOfFlowers.length === 0) {
      setShowFlowerMessage(true)
    }
    setFlowers(newArrayOfFlowers)
    setFlowersToDisplay(newArrayOfFlowers)
    collectTypeSpecies(newArrayOfFlowers)
    setCurrentOperationFilter("By default")
  }

  function sendCheckedFlowers(checkedFlowers) {
    setFinalCheckedFlowers(checkedFlowers)
  }

  function updateFlowersWithNewLocations(newOps) {
    debugger
    let updatedFlowers = [...flowers]
    newOps.forEach(operation => updatedFlowers.forEach(flower => {
                                                if(flower.id === operation.flower.id) {
                                                  flower.locations.push(operation.location)
                                                }})) 
    setFlowers(updatedFlowers)
  }

  function updateFlowerMessage(bool_var) {
    setShowFlowerMessage(bool_var)
  }

  function extractFlowerObjById(flowerId) {
    let intFlowerId = parseInt(flowerId)
    let flowerObj = flowers.find(flower => flower.id === intFlowerId)
    setFlowerNeedToUpdate(flowerObj)
  }
//-----------------------------------Locations---------------------------------//
  useEffect(() => {
    fetch("/locations")
    .then(res => res.json())
    .then(locations => {
      setArrayOfUniqueLocations(locations)
    })
  }, [])

//-------------------------------Planting Operations---------------------------------//
  useEffect(() => {
    fetch("/planting-operations")
    .then(res => res.json())
    .then(operations => {
      setPlantingOperations(operations)
    setOperationsToDisplay(operations)})
  }, [])

  function changeCurrentOperaionFilter(filter) {
    setErrors([])
    setCurrentOperationFilter(filter)
    updateOperationsToDisplay(filter) 
  }

  function updateOperationsToDisplay(filter) {
    if(filter === "By default") {
      setOperationsToDisplay(plantingOperations)
    }else if(filter === "By flowers"){
      let arrayOfFlowersAndLocations = []
      debugger
      //flowers has old info about locations
      flowers.forEach(flower => {
        let arrayOfLocations =[]
        let flower_obj = {name: flower.name, image_url: flower.image_url}
        flower.locations.forEach(location => arrayOfLocations.push(location.image_url)
        )
        flower_obj = {...flower_obj, arrayOfLocations}
        arrayOfFlowersAndLocations.push(flower_obj)
      })
        setOperationsToDisplay(arrayOfFlowersAndLocations)
    }
  }

  function addPlantingOperations(newOps, newErrs) {
    if(newOps.length !== 0) {
      let newArray = [...newOps, ...plantingOperations]
      setPlantingOperations(newArray)
      setOperationsToDisplay(newArray)
      updateFlowersWithNewLocations(newOps)
    }
    if(newErrs.length !== 0) {
      setErrors([...newErrs])
    }
    
  }

  function deletePlantingOperationsByFlowers(arrayOfDeletedFlowersIds) {
    let newArrayOfOperations = [...plantingOperations]

    arrayOfDeletedFlowersIds.forEach(id => {
      newArrayOfOperations = newArrayOfOperations.filter(operation => operation.flower.id !== id)
      
    })
    setPlantingOperations(newArrayOfOperations)
    setOperationsToDisplay(newArrayOfOperations)
  }

  function deletePlantingOperation(operationObj) {
    debugger
    let newArrayOfOperations = [...plantingOperations]
    newArrayOfOperations = newArrayOfOperations.filter(operation => operation.id !== operationObj.id)
    setPlantingOperations(newArrayOfOperations)
    setOperationsToDisplay(newArrayOfOperations)
    
    //deleteLocationOutOfflowerObj([operationObj.flower.id])//////////////////////////////////
    //need to update flowers state in the frontend- delete location out of flower's locations
  }

  function loadHeader() {
    return (
    <div>
        <Header user={user.username} changeCurrentTypeFlower={changeCurrentTypeFlower}
                   setUser={setUser} changeCurrentOperaionFilter={changeCurrentOperaionFilter} errors={errors}
                   updateErrors={updateErrors}/>
    </div>
    )
  }
  return (
    <>
      {user ? loadHeader() : null}
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login onLogin={onLogin}/>} />
          <Route path="/signup" element={<SignUp onLogin={onLogin}/>} />
          <Route path="/add-new-flower" element={<NewFlowerForm addNewFlower={addNewFlower} updateErrors={updateErrors} />} />
          <Route path="/update-flower" element={<UpdateFlowerForm flowerNeedToUpdate={flowerNeedToUpdate} handleUpdatedFlower={handleUpdatedFlower}
                  updateErrors={updateErrors}/>} />
          <Route path="/catalog" element={<Catalog flowersToDisplay={flowersToDisplay} sendCheckedFlowers={sendCheckedFlowers}
                currentTypeFlower={currentTypeFlower} changeCurrentTypeFlower={changeCurrentTypeFlower}
                arrayTypesOfFlowers={arrayTypesOfFlowers} deleteFlower={deleteFlower} deletePlantingOperationsByFlowers={deletePlantingOperationsByFlowers}
                showFlowerMessage={showFlowerMessage} updateFlowerMessage={updateFlowerMessage} updateErrors={updateErrors}
                extractFlowerObjById={extractFlowerObjById}/>} />
          <Route path="/choose-location" element={<ChooseLocation arrayOfUniqueLocations={arrayOfUniqueLocations}
                finalCheckedFlowers={finalCheckedFlowers}  addPlantingOperations={addPlantingOperations}
                changeCurrentOperaionFilter={changeCurrentOperaionFilter} updateErrors={updateErrors} />} />
          <Route path="/planting-operations" element={<Operations operationsToDisplay={operationsToDisplay} 
                changeCurrentOperaionFilter={changeCurrentOperaionFilter} currentOperationFilter={currentOperationFilter} updateErrors={updateErrors}
                deletePlantingOperation={deletePlantingOperation}/>} />
          <Route path="*" element={<Intro />} />
          <Route path="/" element={<Intro />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

//when plant flowers, check flowers, and send them from Catalog/sibling component to App/parent component 
//in order to transfer checked flowers to ChooseLocation/sibling component.
//From Header I choose to navigate to Planting, I go to App where i keep all my routes, and there I keep my planting operations state
//And can transfer all planting operations to the component