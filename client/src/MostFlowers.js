import React from "react";

function MostFlowers({user}) {
    
    return (
        <div>
            <h1>User with the most number of created flowers:</h1>
            <h3>{user.username}</h3>
        </div>
    )
}

export default MostFlowers