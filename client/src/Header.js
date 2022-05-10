import React, {useState} from "react";
import { useNavigate} from "react-router-dom"

function Hearder({currentTypeFlower, arrayOfTypes, changeTypeFlower, setUser, setLoggedIn}) {
    const navigate = useNavigate()
    
    function handleChangeType(event) {
        changeTypeFlower(event.target.value)
    }

    let typeOptions = arrayOfTypes.map(type => {
        return (
            <option key={type} value={type}>{type}</option>
        )
    })

    function handleLogout() {
        fetch(("/logout"), { method: "DELETE"})
        .then(res => {
          if(res.ok) {
            setUser(null)
            setLoggedIn(false)
            navigate("/login")
          } })
      }
    return (
        <div>
            <select onChange={handleChangeType} value={currentTypeFlower}>
                <option value="All">All</option>
                {typeOptions}
            </select>
            <button onClick={handleLogout}>Log Out</button>
        </div>
    )
}

export default Hearder

