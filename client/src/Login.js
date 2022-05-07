import React, { useState } from "react";
import {useState} from 'react';

function Login({}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                password
            })
        })
        .then(res => res.json())
        .then(user => console.log(user))
    }
    
    return (
        <div className="card">
            <form onSubmit={handleSubmit}>
                <input onChange={(e) => setUsername(e.target.value)}
                 type="text" id="username" value={username} placeholder="Username"></input>
                <input onchange={(e) => setPassword(e.target.value)}
                type="text" id="password" value={password} placeholder="Password"></input>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;