import React from "react";
import { useNavigate} from "react-router-dom"
import ErrorList from "./ErrorList";

function Hearder({user, setUser, changeCurrentTypeFlower, changeCurrentOperaionFilter, errors}) {
    const navigate = useNavigate()
   
    function handleLogout() {
        fetch(("/logout"), { method: "DELETE"})
        .then(res => {
          if(res.ok) {
            setUser(null)
            changeCurrentTypeFlower("All")
            changeCurrentOperaionFilter("By default")
            navigate("/login")
          } })
      }

    function showFlowers() {
        changeCurrentTypeFlower("All")
        navigate("/catalog")
    }

    function showLocations() {
        navigate("/choose-location")
      }
    
    function showOperations() {
        navigate("/planting-operations")
    }
    return (
        <div className="div">
            <button onClick={handleLogout} className="button-logout">Log Out</button>
            <h2>Hello {user}!</h2>
            <div className="button-header">
                <button onClick={showFlowers} className="btn">Flowers</button>
                <button onClick={showLocations} className="btn">Locations</button>
                <button onClick={showOperations} className="btn">Planting</button>
            </div>
            <ErrorList errors={errors} className="between-text"/>
        </div>
    )
}

export default Hearder

