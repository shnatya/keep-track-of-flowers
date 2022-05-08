import React, { useState, useEffect } from "react";
import Catalog from "./Catalog";
import { Link } from "react-router-dom";


function Welcome({flowers, user, setUser}) {
    const [orders, setAllOrders] = useState([])

    function handleLogout() {
        fetch(("/logout"), { method: "DELETE"})
        .then(res => {
          if(res.ok) {
            setUser(null)
          } })
      }
//I dont have to fetch. Use flowers db to filter
      function handleMyOrders() {
          fetch("/myorders")
          .then(res => {
              if(res.ok) {
                  res.json().then(orders => setAllOrders(orders))
              }
          })
      }
    return (
        <div>
            <button onClick={handleLogout}>Log Out</button>
            <button onClick={handleMyOrders}>My orders</button>
            <h1>Keep the track of your flowers!</h1>
            <Catalog flowers={flowers} />
        </div>
    )
}

export default Welcome;