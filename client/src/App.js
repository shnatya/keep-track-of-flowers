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

  useEffect(() => {
      fetch("/database")
      .then(res => res.json())
      .then(data => {
        setFlowers(data)
      collectTypeSpecies(data)})
    }, [])

  function collectTypeSpecies(data) {

  }
  
  useEffect(() => {
    fetch("/me").then(res => {
      if(res.ok) {
        res.json().then(user => {
          onLogin(user)})
      } 
    })
  }, [])

  function onLogin(user) {
    setUser(user)
    setLoggedIn(true)
  }
  
  function loadHeader() {
    return <Header user={user} setUser={setUser} setLoggedIn={setLoggedIn} />
  }
  
  return (
    <>
      {loggedIn ? loadHeader() : null}
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login onLogin={onLogin}/>} />
          <Route path="/signup" element={<SignUp onLogin={onLogin}/>} />
          <Route path="/catalog" element={<Catalog flowers={flowers}/>} />
          <Route path="/welcome" element={<Welcome user={user} setLoggedIn={setLoggedIn} setUser={setUser} flowers={flowers}/>} />
          <Route path="/" element={<Login onLogin={setUser}/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
