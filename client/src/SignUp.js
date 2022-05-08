import React, { useState } from "react";
import ErrorList from "./ErrorList";

function SignUp({onLogin}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [errors, setErrors] = useState([])

    function handleSubmit(e) {
        e.preventDefault()
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                password,
                password_confirmation: passwordConfirmation
            })
        })
        .then(res => {
            if(res.ok){
                res.json().then(user => onLogin(user))
            }else{
                res.json().then(err => setErrors(err.errors))
            }
        })
        
    }
    
    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <h2>Sign Up</h2>
                <input onChange={(e) => setUsername(e.target.value)}
                 type="text" id="username" value={username} placeholder="Username" className="input"></input>
                <input onChange={(e) => setPassword(e.target.value)}
                type="text" id="password" value={password} placeholder="Password" className="input"></input>
                <input onChange={(e) => setPasswordConfirmation(e.target.value)}
                type="text" id="password_confirmation" value={passwordConfirmation} placeholder="Password confirmation" className="input"></input>
                <button type="submit" className="button">Sign up</button>
            </form>
            <ErrorList errors={errors} />
        </div>
    )
}

export default SignUp;