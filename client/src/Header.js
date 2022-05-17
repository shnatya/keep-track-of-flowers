import React from "react";
import { useNavigate} from "react-router-dom"

function Hearder({user, setUser, changeCurrentTypeFlower}) {
    const navigate = useNavigate()

    function handleLogout() {
        fetch(("/logout"), { method: "DELETE"})
        .then(res => {
          if(res.ok) {
            setUser(null)
            
            changeCurrentTypeFlower("All")
            navigate("/login")
          } })
      }
    return (
        <div>
            <button onClick={handleLogout}>Log Out</button>
            <h2>Hello {user}!</h2>
        </div>
    )
}

export default Hearder

