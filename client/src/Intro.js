import React from "react";
import { Link } from "react-router-dom";


function Intro() {
   
    return (
        <div >
            <h1>Keep track of your flowers</h1>
            <Link to="/login">log in</Link> 
            <Link to="/signup">sign up</Link> 
            <img src="https://www.tulips.com/images/popup/Yellow-Crocus.jpg" alt="Crocuses" width="500" height="600"></img>
        </div>
    )
}

export default Intro;