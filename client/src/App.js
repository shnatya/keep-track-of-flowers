import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import SignUp from './SignUp';
import Intro from './Intro';
import Login from './Login';
import Welcome from './Welcome';
import Header from './Header';
import ChooseLocation from './ChooseLocation'

function App() {
  const [user, setUser] = useState(null)
  const [loggedIn, setLoggedIn] = useState(false)
  const [flowers, setFlowers] = useState([])
  const [arrayOfTypes, setArrayOfTypes] = useState([])
  const [currentTypeFlower, setCurrentTypeFlower] = useState("All")
  const [flowersToDisplay, setFlowersToDisplay] = useState([])
  const [finalCheckedFlowers, setFinalCheckedFlowers] = useState([])

  useEffect(() => {
      fetch("/database")
      .then(res => res.json())
      .then(data => {
        setFlowers(data)
        setFlowersToDisplay(data)
        collectTypeSpecies(data)})
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
      }
    })
    console.log(typeSpeciesArray)
    setArrayOfTypes(typeSpeciesArray)
  }

  function onLogin(user) {
    setUser(user)
    setLoggedIn(true)
  }
  function changeCurrentTypeFlower(type) {
    setCurrentTypeFlower(type)
  }
  function loadHeader() {
    return (
    <div>
        <Header currentTypeFlower={currentTypeFlower} 
                   changeTypeFlower={changeTypeFlower}
                   arrayOfTypes={arrayOfTypes}
                   user={user.username} changeCurrentTypeFlower={changeCurrentTypeFlower}
                    setUser={setUser} setLoggedIn={setLoggedIn} />
        
    </div>
    )
  }
  
  function changeTypeFlower(type) {
    setCurrentTypeFlower(type)
    if(type === "All") {
      setFlowersToDisplay(flowers)
    }else {
      let newArray = []
      newArray = flowers.filter(flower => type === flower.type_species)
      setFlowersToDisplay(newArray)
    }
  }

  function sendCheckedFlowers(checkedFlowers) {
    setFinalCheckedFlowers(checkedFlowers)
  }
  return (
    <>
      {loggedIn ? loadHeader() : null}
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login onLogin={onLogin}/>} />
          <Route path="/signup" element={<SignUp onLogin={onLogin}/>} />
          <Route path="/welcome" element={<Welcome user={user} setLoggedIn={setLoggedIn}
                setUser={setUser} flowersToDisplay={flowersToDisplay} sendCheckedFlowers={sendCheckedFlowers}
                currentTypeFlower={currentTypeFlower} />} />
          <Route path="/choose-location" element={<ChooseLocation finalCheckedFlowers={finalCheckedFlowers}/>} />
          <Route path="/" element={<Intro />} />
          
        </Routes>
      </div>
    </>
  );
}

export default App;
