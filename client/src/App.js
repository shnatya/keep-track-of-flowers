import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from "react-router-dom";
import SignUp from './SignUp';
import Intro from './Intro';
import Login from './Login';
import Header from './Header';
import ChooseLocation from './ChooseLocation'
import Operations from './Operations';
import Catalog from './Catalog';
import NewFlowerForm from './NewFlowerForm';

function App() {
  const [user, setUser] = useState(null)
  const [flowers, setFlowers] = useState([])
  const [arrayOfTypes, setArrayOfTypes] = useState([])
  const [arrayOfUniqueLocations, setArrayOfUniqueLocations] = useState([])
  const [currentTypeFlower, setCurrentTypeFlower] = useState("All")
  const [flowersToDisplay, setFlowersToDisplay] = useState([])
  const [finalCheckedFlowers, setFinalCheckedFlowers] = useState([])
  const [finalCheckedLocations, setFinalCheckedLocations] = useState([])
  const [plantingOperations, setPlantingOperations] = useState([])
  const [currentOperationFilter, setCurrentOperationFilter] = useState("By default")
  const [operationsToDisplay, setOperationsToDisplay] = useState([])
  const [showFlowerMessage, setShowFlowerMessage] = useState(false)
  const [errors, setErrors] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
      fetch("/database")
      .then(res => res.json())
      .then(data => {
      
        setFlowers(data)
        setFlowersToDisplay(data)
        collectTypeSpecies(data)
      })
    }, [])

  useEffect(() => {
    fetch("/locations")
    .then(res => res.json())
    .then(locations => {
      setArrayOfUniqueLocations(locations)
    })
  }, [])

  useEffect(() => {
    fetch("/planting-operations")
    .then(res => res.json())
    .then(operations => {
      setPlantingOperations(operations)
    setOperationsToDisplay(operations)})
  }, [])
  
  useEffect(() => {
    fetch("/me").then(res => {
      if(res.ok) {
        res.json().then(user => {
          console.log(user)
          onLogin(user)})
      } 
    })
  }, [])
  
  function updateErrors(newErrors) {
    setErrors(newErrors)
  }
  function collectTypeSpecies(data) {
    let typeSpeciesArray = []
    data.forEach(flower => {
      let result = typeSpeciesArray.find(el => el === flower.type_species)
      if (result === undefined) {
        typeSpeciesArray = [...typeSpeciesArray, flower.type_species]
      }})
    setArrayOfTypes(typeSpeciesArray)
  }

  function onLogin(user) {
    setUser(user)
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
    let newArrayOfFlowers = [...flowers]
    arrayOfDeletedFlowersIds.forEach(id => {
      newArrayOfFlowers = newArrayOfFlowers.filter(flower => flower.id !== id)
      console.log(newArrayOfFlowers)
    })
    if(newArrayOfFlowers.length === 0) {
      setShowFlowerMessage(true)
    }
    console.log(newArrayOfFlowers)
    setFlowers(newArrayOfFlowers)
    setFlowersToDisplay(newArrayOfFlowers)
  }

  function changeCurrentOperaionFilter(filter) {
    setCurrentOperationFilter(filter)
    updateOperationsToDisplay(filter) 
  }

  function updateOperationsToDisplay(filter) {
    if(filter === "By default") {
      setOperationsToDisplay(plantingOperations)
    }else if(filter === "By flowers"){

      let arrayOfFlowersAndLocations = []
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

  function sendCheckedFlowers(checkedFlowers) {
    setFinalCheckedFlowers(checkedFlowers)
  }

  function sendCheckedLocations(checkedLocations) {
    setFinalCheckedLocations(checkedLocations)
  }

  function addPlantingOperations(newOps) {
    let newArray = [...newOps, ...plantingOperations]
    setPlantingOperations(newArray)
    setOperationsToDisplay(newArray)
  }

  function deletePlantingOperations(arrayOfDeletedFlowersIds) {
    let newArrayOfOperations = [...plantingOperations]

    arrayOfDeletedFlowersIds.forEach(id => {
      newArrayOfOperations = newArrayOfOperations.filter(operation => operation.flower.id !== id)
      
    })
    setPlantingOperations(newArrayOfOperations)
    setOperationsToDisplay(newArrayOfOperations)
  }
  function updateFlowerMessage(v) {
    setShowFlowerMessage(v)
    debugger
  }

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
        console.log(data)
      }))
  }
  function loadHeader() {
    return (
    <div>
        <Header user={user.username} changeCurrentTypeFlower={changeCurrentTypeFlower}
                   setUser={setUser} changeCurrentOperaionFilter={changeCurrentOperaionFilter} errors={errors}/>
        
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
          <Route path="/add-new-flower" element={<NewFlowerForm addNewFlower={addNewFlower} />} />
          <Route path="/catalog" element={<Catalog flowersToDisplay={flowersToDisplay} sendCheckedFlowers={sendCheckedFlowers}
                currentTypeFlower={currentTypeFlower} changeCurrentTypeFlower={changeCurrentTypeFlower}
                arrayOfTypes={arrayOfTypes} deleteFlower={deleteFlower} deletePlantingOperations={deletePlantingOperations}
                showFlowerMessage={showFlowerMessage} updateFlowerMessage={updateFlowerMessage} updateErrors={updateErrors}/>} />
          <Route path="/choose-location" element={<ChooseLocation arrayOfUniqueLocations={arrayOfUniqueLocations}
                finalCheckedFlowers={finalCheckedFlowers} sendCheckedLocations={sendCheckedLocations} addPlantingOperations={addPlantingOperations}/>} />
          <Route path="/planting-operations" element={<Operations operationsToDisplay={operationsToDisplay} 
                changeCurrentOperaionFilter={changeCurrentOperaionFilter} currentOperationFilter={currentOperationFilter}/>} />
          <Route path="*" element={<Intro />} />
          <Route path="/" element={<Intro />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
