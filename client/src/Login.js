import React, { useState } from "react";
import { Link  } from "react-router-dom";
import { useNavigate  } from "react-router-dom";
import ErrorList from "./ErrorList";

function Login({onLogin}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])
    const history = useNavigate()

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
                res.json().then(user => {
                    onLogin(user)
                    history('/welcome')})
            }else{
                res.json().then(errors => {
                    setErrors(errors.errors)
                    setUsername("")
                    setPassword("")})
            }
        })
    }

    function handleChange(event) {
        setUsername(event.target.value)
        setErrors([])
    }
    return (
        <div className="form">
            
            <form onSubmit={handleSubmit}>
                <h2>Log In</h2>
                <input onChange={handleChange}
                 type="text" id="username" value={username} autoComplete="off" placeholder="Username" className="input"></input>
                <input onChange={(e) => setPassword(e.target.value)}
                type="password" id="password" value={password}  autoComplete="current-password" placeholder="Password" className="input"></input>
                <button type="submit" className="button">Log In</button>
            </form>
            <ErrorList errors={errors} />
            <h3>Don't have an account? Please </h3>
            <Link to="/signup">sign up</Link> 
        </div>
    )
}

export default Login;