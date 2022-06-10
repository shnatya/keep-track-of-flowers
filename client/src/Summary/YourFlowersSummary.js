import React, { useState, useEffect} from "react";
import InfoFlower from "./InfoFlower.js"

function YourFlowersSummary({user, updateErrors, retrieveUser}) {
    const [myFlowers, setMyFlowers] = useState([{summary: ""}])
    let arrayOfFlowers = myFlowers.map((flower, index) => <InfoFlower key={index} flower={flower} />)

    useEffect(() => {
        if(user === null){
            retrieveUser()
        }else{
            fetch(`/users/${user.id}/flowers_summary`)
            .then(res => {
                if(res.ok){
                    res.json().then(flowers => setMyFlowers(flowers))
                }else{updateErrors(["Please log in first"])}})}
        }, [user])

    return (
        <div className="container">
            <h1>Summary of My Flowers</h1>
            <ul className="flower-summary">
                {arrayOfFlowers}
            </ul>
        </div>
    );
}

/*MyFlowers.defaultProps =  {
    user: {
    id: 1,
    username: "",
  }
}*/
export default YourFlowersSummary

/*
useEffect(() => {
        if(user === null){
            navigate('/login')
        }else{
            fetch(`/users/${user.id}/flowers_summary`)
        .then(res => {
                if(res.ok){
                    res.json().then(flowers => setMyFlowers(flowers))
                }else{updateErrors(["Please log in first"])}
        })
        }
        }, [])*/