import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts'
import {SignUpComponent} from "../../components"

const Login = () => {
    const [inputValue, setInputValue] = useState ("")
    const [showSignUp, setShowSignUp] = useState(false);
    const navigateTo = useNavigate ()
    const {setUser} = useAuth()

    function handleInput(e) {
        setInputValue(e.target.value);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setUser(inputValue);
        navigateTo("/")
    }

    function handleSignUpClick() {
        setShowSignUp(!showSignUp)
    }


  return (
    <>
    <h2>Log In</h2>
    <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInput} value={inputValue} placeholder='username' autoComplete="off"/>
        <br/>
        <input type="password"  placeholder="password" autoComplete="off"></input>
        <br/>
        <br/>
        <input type="submit" value="Log in"/>
        <br/>
        <p>No account? <button type = 'button' onClick={handleSignUpClick} > Sign up</button></p>
    
    </form>
    <br/>
    <br/>
    {showSignUp && <SignUpComponent />}
    </>
  )
}

export default Login