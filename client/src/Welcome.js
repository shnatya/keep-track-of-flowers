import React, { useState, useEffect,  } from "react";
import Catalog from "./Catalog";


function Welcome({flowersToDisplay, currentTypeFlower, sendCheckedFlowers}) {
    return (
        <div>
            <h1>Catalog</h1>
            <h2>{currentTypeFlower}</h2>
            <Catalog flowersToDisplay={flowersToDisplay} sendCheckedFlowers={sendCheckedFlowers}/>
        </div>
    )
}

export default Welcome;