import React, { useState, useEffect} from "react";
import InfoFlower from "./InfoFlower.js"

function YourFlowersSummary({user, updateErrors, retrieveUser}) {
    const [yourFlowers, setYourFlowers] = useState([{summary: ""}])
    let arrayOfFlowers = yourFlowers.map((flower, index) => <InfoFlower key={index} flower={flower} />)

    useEffect(() => {
        if(user === null){
            retrieveUser()
        }else{
            fetch(`/users/${user.id}/flowers/summary`)
            .then(res => {
                if(res.ok){
                    res.json().then(flowers => setYourFlowers(flowers))
                }else{updateErrors(["Please log in first"])}})}
        }, [user])

    return (
        <div className="container">
            <h1>Summary</h1>
            {arrayOfFlowers.length === 0 ? null :<h2>You have added next flowers in the catalog:</h2>}
            <ul className="flower-summary">
                {arrayOfFlowers.length === 0 ? <h3 style={{color: "green"}}>You haven't added flowers yet. If you'd like to add, go back to Flowers and add some.</h3> : arrayOfFlowers}
            </ul>
        </div>
    );
}

export default YourFlowersSummary

