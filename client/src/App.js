import './App.css';
import React from 'react';
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Catalog from './Catalog';
import Login from './Login';

function App() {
  const [flowers, setFlowers] = useState([])
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("/flowers")
    .then(res => res.json())
    .then(data => setFlowers(data))
  }, [])

  function onLogin(user) {
    setUser(user)
  }
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login onLogin={onLogin}/>
          </Route>
          <Route path="/flowers">
            <Catalog flowers={flowers} />
          </Route>
          <Route path="/">
            <h1>Hello!</h1>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
