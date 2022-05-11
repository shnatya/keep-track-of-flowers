import React, {useState} from "react";
import { useNavigate} from "react-router-dom"

function Hearder({currentTypeFlower, changeCurrentTypeFlower, arrayOfTypes, changeTypeFlower, user, setUser, setLoggedIn}) {
    const navigate = useNavigate()

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
            changeCurrentTypeFlower("All")
            navigate("/login")
          } })
      }
    return (
        <div>
            <select onChange={(event) => changeCurrentTypeFlower(event.target.value)} value={currentTypeFlower}>
                <option value="All">All</option>
                {typeOptions}
            </select>
            <button onClick={handleLogout}>Log Out</button>
            <h2>Hello {user}!</h2>
        </div>
    )
}

export default Hearder

