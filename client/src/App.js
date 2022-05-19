import './App.css';
import React, { useState, useEffect, useDebugValue } from 'react';
import { Route, Routes } from "react-router-dom";
import SignUp from './SignUp';
import Intro from './Intro';
import Login from './Login';
import Header from './Header';
import ChooseLocation from './ChooseLocation'
import Operations from './Operations';
import Catalog from './Catalog';

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
    fetch("/planting_operations")
    .then(res => res.json())
    .then(operations => {
      setPlantingOperations(operations)
    setOperationsToDisplay(operations)})
  }, [])
  
  useEffect(() => {
    fetch("/me").then(res => {
      if(res.ok) {
        res.json().then(user => {
          onLogin(user)})
      } 
    })
  }, [])
  
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
    updateFlowersToDisplay(type) 
  }
  
  function updateFlowersToDisplay(type) {
    setCurrentTypeFlower(type)
    if(type === "All") {
      setFlowersToDisplay(flowers)
    }else {
      let newArray = []
      newArray = flowers.filter(flower => type === flower.type_species)
      setFlowersToDisplay(newArray)
    }
  }

  function changeCurrentOperaionFilter(filter) {
    setCurrentOperationFilter(filter)
    updateOperationsToDisplay(filter) 
    debugger
  }

  function updateOperationsToDisplay(filter) {
    debugger
    if(filter === "By default") {
      debugger
      setOperationsToDisplay(plantingOperations)
    }else if(filter === "By flowers"){
      debugger
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

  function loadHeader() {
    return (
    <div>
        <Header user={user.username} changeCurrentTypeFlower={changeCurrentTypeFlower}
                   setUser={setUser} changeCurrentOperaionFilter={changeCurrentOperaionFilter}/>
        
    </div>
    )
  }

  function updatePlantingOperations(newOps) {
    debugger
    console.log(newOps)
    // let newArray = [newOps, ...plantingOperations]
    let newArray = newOps.concat(plantingOperations)
    setPlantingOperations(newArray)
    setOperationsToDisplay(newArray)
  }
  
  return (
    <>
      {user ? loadHeader() : null}
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login onLogin={onLogin}/>} />
          <Route path="/signup" element={<SignUp onLogin={onLogin}/>} />
          <Route path="/catalog" element={<Catalog flowersToDisplay={flowersToDisplay} sendCheckedFlowers={sendCheckedFlowers}
                currentTypeFlower={currentTypeFlower} changeCurrentTypeFlower={changeCurrentTypeFlower}
                arrayOfTypes={arrayOfTypes} />} />
          <Route path="/choose-location" element={<ChooseLocation arrayOfUniqueLocations={arrayOfUniqueLocations}
                finalCheckedFlowers={finalCheckedFlowers} sendCheckedLocations={sendCheckedLocations} updatePlantingOperations={updatePlantingOperations}/>} />
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
