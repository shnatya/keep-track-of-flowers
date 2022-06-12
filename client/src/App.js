import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from "react-router-dom";
import SignUp from './Log/SignUp';
import Intro from './Intro';
import Login from './Log/Login';
import Header from './Header';
import YourFlowersSummary from './Summary/YourFlowersSummary';
import ChooseLocation from './Location/ChooseLocation'
import Operations from './Operations/Operations';
import Catalog from './Flowers/Catalog';
import NewFlowerForm from './Flowers/NewFlowerForm';
import UpdateFlowerForm from './Flowers/UpdateFlowerForm'

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

  useEffect(() => retrieveUser()
  , [])

  function retrieveUser(){
      fetch("/me")
      .then(res => res.json())
      .then(user => {
        setUser(user)
        requestUsersPlanting(user)
      })
  }

  function onLogin(user) {
    setUser(user)
  }

  function resetUser(){
    setUser(null)
  }

  function updateErrors(newErrors) {
    setErrors(newErrors)
  }

//----------------------------Flowers----------------------------------//
  useEffect(() => {
      fetch("/flowers")
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setFlowers(data)
        setFlowersToDisplay(data)
        collectTypeSpecies(data)
      })
      .catch(errors => console.log(errors))
    }, []) 

  function addNewFlower(newFlower) {
    fetch("/flowers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({...newFlower, user_id: user.id})
    })
    .then(res => res.json())
    .then(data => {
      if(data.errors) {
        updateErrors(data.errors)
      }else {     
        setFlowers([...flowers, data])
        collectTypeSpecies([...flowers, data])
        setCurrentTypeFlower("All") 
        setFlowersToDisplay([data, ...flowers])
        updateErrors([`${data.name} has been added.`])
        navigate('/catalog')
      }
    })
  }

  function handleUpdatedFlower(updatedFlower) {
    fetch(`/flowers/${updatedFlower.id}`, {
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
        addUpdatedFlowerToFlowerDB(data)
        collectTypeSpecies([...flowers, data])
      
        setCurrentTypeFlower("All") 
        navigate('/catalog')
      }
    }))
  }

  function addUpdatedFlowerToFlowerDB(updatedFlower) {
    let updatedFlowerDB = []
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

  function deleteFlower(arrayOfDeletedFlowersIds, errors) {
    let newArrayOfFlowers = [...flowers]
    let arrayOfErrors = [...errors]
    arrayOfDeletedFlowersIds.forEach(id => {
      
      newArrayOfFlowers = newArrayOfFlowers.filter(flower => {
                        if(flower.id !== id) {
                          return flower
                        }else{
                          arrayOfErrors.push(`${flower.name} has been deleted.`)
                          return null 
                        }
                      })

    })
    if(newArrayOfFlowers.length === 0) {
      setShowFlowerMessage(true)
    }
    setFlowers(newArrayOfFlowers)
    setFlowersToDisplay(newArrayOfFlowers)
    setCurrentTypeFlower("All")
    collectTypeSpecies(newArrayOfFlowers)
    setCurrentOperationFilter("By default")
    setFinalCheckedFlowers([])
    updateErrors(arrayOfErrors)
  }

  function sendCheckedFlowers(checkedFlowers) {
    setFinalCheckedFlowers(checkedFlowers)
  }

  function updateFlowersWithNewLocations(newOps) {
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

  function deleteLocationOutOfFlowerObj(flower_id, location_id) {
    let newArrayOfFlowers = [...flowers]
    newArrayOfFlowers = newArrayOfFlowers.map(flower => {
                        if(flower.id === flower_id) {
                          let updatedLocations = flower.locations.filter(location => location.id !== location_id)
                          console.log({...flower, locations: updatedLocations})
                          return {...flower, locations: updatedLocations}
                        }else{
                          return flower
                        }
    })
    setFlowers(newArrayOfFlowers)
    setFlowersToDisplay(newArrayOfFlowers)
    console.log(newArrayOfFlowers)
    
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
  function requestUsersPlanting(user) {
      fetch(`/users/${user.id}/planting-operations`)
      .then(res => {
        if(res.ok) {
          res.json().then(operations => {
            setPlantingOperations(operations)
            setOperationsToDisplay(operations)
          })
        }
        else{
          res.json().then(() => updateErrors(["Please log in or sign up first"]))}
      })
      .catch(error => console.log(error))
  }


  useEffect(() => updateOperationsToDisplay(currentOperationFilter),
   [flowers])

  function changeCurrentOperaionFilter(filter) {
    setErrors([])
    setCurrentOperationFilter(filter)
    updateOperationsToDisplay(filter) 
  }

  function updateOperationsToDisplay(filter) {
    if(filter === "By default") {
      setOperationsToDisplay(plantingOperations)
      console.log(plantingOperations)
    }else if(filter === "By flowers"){

          let filterByFlowersObject = {}
          plantingOperations.forEach(operation => {
            let flowerImageURLKey = operation.flower.image_url
            if (filterByFlowersObject[flowerImageURLKey]) {
              filterByFlowersObject[flowerImageURLKey].push(operation.location.image_url)
            } else {
              filterByFlowersObject[flowerImageURLKey] = [operation.location.image_url]
            }
          })
          console.log(filterByFlowersObject)
          setOperationsToDisplay(filterByFlowersObject)

    }
  }

  function addPlantingOperations(newOps, newMessages) {
    if(newOps.length !== 0) {
      let newArray = [...newOps, ...plantingOperations]
      setPlantingOperations(newArray)
      setOperationsToDisplay(newArray)
      updateFlowersWithNewLocations(newOps)
    }
    if(newMessages.length !== 0) {
      setErrors([...newMessages])
    }
    setFinalCheckedFlowers([])
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
    let newArrayOfOperations = [...plantingOperations]
    newArrayOfOperations = newArrayOfOperations.filter(operation => operation.id !== operationObj.id)
    setPlantingOperations(newArrayOfOperations)
    setOperationsToDisplay(newArrayOfOperations)
    
    deleteLocationOutOfFlowerObj(operationObj.flower.id, operationObj.location.id)
  }

  function loadHeader() {
    return (
    <div>
        <Header user={user.username} changeCurrentTypeFlower={changeCurrentTypeFlower}
                   setUser={setUser} changeCurrentOperaionFilter={changeCurrentOperaionFilter} errors={errors}
                   updateErrors={updateErrors} resetUser={resetUser} requestUsersPlanting={requestUsersPlanting} />
    </div>
    )
  }
  return (
    <>
      {user !== null ? loadHeader() : null}
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login onLogin={onLogin} requestUsersPlanting={requestUsersPlanting} />} />
          <Route path="/signup" element={<SignUp onLogin={onLogin} requestUsersPlanting={requestUsersPlanting}/>} />
          <Route path="/add-new-flower" element={<NewFlowerForm addNewFlower={addNewFlower} updateErrors={updateErrors} />} />
          <Route path="/update-flower" element={<UpdateFlowerForm flowerNeedToUpdate={flowerNeedToUpdate} handleUpdatedFlower={handleUpdatedFlower}
                  updateErrors={updateErrors}/>} />
          <Route path="/catalog" element={<Catalog flowersToDisplay={flowersToDisplay} sendCheckedFlowers={sendCheckedFlowers}
                currentTypeFlower={currentTypeFlower} changeCurrentTypeFlower={changeCurrentTypeFlower}
                arrayTypesOfFlowers={arrayTypesOfFlowers} deleteFlower={deleteFlower} deletePlantingOperationsByFlowers={deletePlantingOperationsByFlowers}
                showFlowerMessage={showFlowerMessage} updateFlowerMessage={updateFlowerMessage} updateErrors={updateErrors}
                extractFlowerObjById={extractFlowerObjById} />} />
          <Route path="/choose-location" element={<ChooseLocation user={user} arrayOfUniqueLocations={arrayOfUniqueLocations}
                finalCheckedFlowers={finalCheckedFlowers}  addPlantingOperations={addPlantingOperations}
                changeCurrentOperaionFilter={changeCurrentOperaionFilter} updateErrors={updateErrors} />} />
          <Route path="/planting-operations" element={<Operations operationsToDisplay={operationsToDisplay} 
                changeCurrentOperaionFilter={changeCurrentOperaionFilter} currentOperationFilter={currentOperationFilter} updateErrors={updateErrors}
                deletePlantingOperation={deletePlantingOperation} updateOperationsToDisplay={updateOperationsToDisplay} />} />
          <Route path="/your_flowers_summary" element={<YourFlowersSummary user={user} updateErrors={updateErrors} retrieveUser={retrieveUser}/>} />
          <Route path="*" element={<Intro updateErrors={updateErrors}/>} />
          <Route path="/" element={<Intro updateErrors={updateErrors}/>} />
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


 /*useEffect(() => {
    fetch("/locations")
    .then(response => {
      if(response.ok) {
        response.json().then(locations => setArrayOfUniqueLocations(locations))
      }else{
        response.json().then(error => console.log(error))
      }
    })
  }, [])*/

  /*
  {name: "Fabio",
            type_species: "Tulips",
            season: "Spring",
            subseason: "Mid",
            color: "Red-yellow",
            height: "12 inches",
            description: "",
            image_url: "https://www.tulips.com/images/popup/fabio-fringed-tulips.jpg"} */