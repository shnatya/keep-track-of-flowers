import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorList from "../Errors/ErrorList";

function SignUp({onLogin, requestUsersPlanting}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()

    function handleSubmit(event) {
        event.preventDefault()
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
                res.json().then(user => {
                    onLogin(user)
                    requestUsersPlanting(user)
                    navigate('/catalog')
                })
            }else{
                res.json().then(err => handleErrors(err))
            }
        })
    }
    
    function handleErrors(err) {
        setErrors(err.errors)
        setUsername("")
        setPassword("")
        setPasswordConfirmation("")
    }

    function handleChange(event) {
        setUsername(event.target.value)
        setErrors([])
    }
    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <h2>Sign Up</h2>
                <input onChange={handleChange} type="text" id="username" value={username} placeholder="Username" autoComplete="off" className="input"></input>
                <input onChange={(e) => setPassword(e.target.value)}
                type="password" id="password" value={password} placeholder="Password" className="input"></input>
                <input onChange={(e) => setPasswordConfirmation(e.target.value)}
                type="password" id="password_confirmation" value={passwordConfirmation} placeholder="Password confirmation" className="input"></input>
                <button type="submit" className="button-login">Sign up</button>
            </form>
            <ErrorList errors={errors} />
        </div>
    )
}

export default SignUp;