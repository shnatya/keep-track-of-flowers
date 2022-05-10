import './App.css';
import React from 'react';
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import SignUp from './SignUp';
import Catalog from './Catalog';
import Login from './Login';
import Welcome from './Welcome';
import Header from './Header';

function App() {
  const [user, setUser] = useState(null)
  const [loggedIn, setLoggedIn] = useState(false)
  const [flowers, setFlowers] = useState([])
  const [arrayOfTypes, setArrayOfTypes] = useState([])
  const [currentTypeFlower, setCurrentTypeFlower] = useState("All")
  const [flowersToDisplay, setFlowersToDisplay] = useState([])

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
  
  function loadHeader() {
    return <Header currentTypeFlower={currentTypeFlower} 
                   changeTypeFlower={changeTypeFlower}
                   arrayOfTypes={arrayOfTypes}
                   user={user.username}
                    setUser={setUser} setLoggedIn={setLoggedIn} />
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

  return (
    <>
      {loggedIn ? loadHeader() : null}
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login onLogin={onLogin}/>} />
          <Route path="/signup" element={<SignUp onLogin={onLogin}/>} />
          <Route path="/welcome" element={<Welcome user={user} setLoggedIn={setLoggedIn}
                setUser={setUser} flowers={flowersToDisplay} currentTypeFlower={currentTypeFlower} />} />
          <Route path="/" element={<Login onLogin={setUser}/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
