import React from "react";
import { Link } from "react-router-dom";


function Intro({updateErrors}) {
   function handleClick() {
    updateErrors([])
   }
   
    return (
        <div >
            <div className="button-header">
               <Link to="/login" onClick={handleClick} className="between-in-up">Log in</Link> 
               <Link to="/signup" className="between-in-up">Sign up</Link> 
            </div>
            <h1>Keep track of your flowers</h1>    
            <img style={{marginTop: "4px"}} src="https://www.tulips.com/images/popup/Yellow-Crocus.jpg" alt="Crocuses" width="500" height="600"></img>
        </div>
    )
}

export default Intro;