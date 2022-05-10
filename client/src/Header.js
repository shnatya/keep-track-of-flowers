import React, {useState} from "react";
import { useNavigate} from "react-router-dom"

function Hearder({user, setUser, setLoggedIn}) {
    const navigate = useNavigate()

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
            <button onClick={handleLogout}>Log Out</button>
        </div>
    )
}

export default Hearder