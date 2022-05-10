import React, { useState, useEffect,  } from "react";
import Catalog from "./Catalog";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Header from "./Header";


function Welcome({flowers, currentTypeFlower, user, setUser, setLoggedIn}) {

    return (
        <div>
            <h1>Catalog</h1>
            <h2>{currentTypeFlower}</h2>
            <Catalog flowers={flowers} />
        </div>
    )
}

export default Welcome;