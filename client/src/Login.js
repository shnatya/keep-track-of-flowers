import React, { useState } from "react";
import ErrorList from "./ErrorList";

function Login({onLogin}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])

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
        .then(res => {
            if(res.ok){
                res.json().then(user => onLogin(user))
            }else{
                res.json().then(errors => setErrors(errors.errors))
            }
        })
        
    }
    
    return (
        <div className="card">
            <form onSubmit={handleSubmit}>
                <input onChange={(e) => setUsername(e.target.value)}
                 type="text" id="username" value={username} placeholder="Username"></input>
                <input onChange={(e) => setPassword(e.target.value)}
                type="text" id="password" value={password} placeholder="Password"></input>
                <button type="submit">Login</button>
            </form>
            <ErrorList errors={errors} />
        </div>
    )
}

export default Login;