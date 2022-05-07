import React, { useState, useEffect } from "react";
import Catalog from "./Catalog";
import { Link } from 'react-router-dom'


function Welcome({flowers}) {
    

   
    return (
        <div>
            <h3>Please log in or sign up</h3>
            <Link className="links"
            to="/login">Log in</Link>
            
            <Link 
            to="/signup">Sign up</Link>

            <h1>Keep the track of your flowers!</h1>
            <Catalog flowers={flowers} />
        </div>
    )
}

export default Welcome;