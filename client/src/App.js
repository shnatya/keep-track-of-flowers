import './App.css';
import React from 'react';
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import SignUp from './SignUp';
import Catalog from './Catalog';
import Login from './Login';
import Welcome from './Welcome';

function App() {
  const [user, setUser] = useState(null)
  const [flowers, setFlowers] = useState([])

    useEffect(() => {
        fetch("/flowers")
        .then(res => res.json())
        .then(data => setFlowers(data))
      }, [])

  useEffect(() => {
    fetch("/me").then(res => {
      if(res.ok) {
        res.json().then(user => setUser(user))
      } 
    })
  }, [])

  if(!user) return <Login onLogin={setUser}/>

  return (
  
      <div className="App">
        <Switch>
          <Route exact path="/login">
            <Login onLogin={setUser}/>
          </Route>
          <Route exact path="/signup">
            <SignUp onLogin={setUser}/>
          </Route>
          <Route exact path="/catalog">
            <Catalog flowers={flowers}/>
          </Route>
          <Route exact path="/">
            <Welcome flowers={flowers}/>
          </Route>
        </Switch>
      </div>
    
  );
}

export default App;
