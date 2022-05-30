import React from "react";
import { Link } from "react-router-dom";


function Intro() {
   
    return (
        <div >
            <div className="button-header">
               <Link to="/login" className="between">Log in</Link> 
               <Link to="/signup" className="between">Sign up</Link> 
            </div>
            <h1>Keep track of your flowers</h1>    
            <img style={{marginTop: "4px"}} src="https://www.tulips.com/images/popup/Yellow-Crocus.jpg" alt="Crocuses" width="500" height="600"></img>
        </div>
    )
}

export default Intro;