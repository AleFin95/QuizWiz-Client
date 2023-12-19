import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {SignUpComponent} from "../../components"
import {useAuth} from "../../contexts"

const Login = () => {
    const [inputValue, setInputValue] = useState ("")
    const [password, setPassword] = useState("");
    const [showSignUp, setShowSignUp] = useState(false);
    const navigateTo = useNavigate()
    const { setToken } = useAuth();


    function handleInput(e) {
        setInputValue(e.target.value);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const options = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: inputValue, 
              password: password,
            }),
          };
      
          const response = await fetch("https://quizwiz-api.onrender.com/users/login", options);
      
          if (response.status === 200) {
            const { token } = await response.json();
            localStorage.setItem('token', token)
            setToken(token)
            navigateTo('/');
          } else {
            console.error("Login failed");
          }
        } catch (error) {
          console.error("Login error:", error);
        }
      };
    function handleSignUpClick() {
        setShowSignUp(!showSignUp)
    }


  return (
    <>
    <h2>Log In</h2>
    <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInput} value={inputValue} placeholder='email' autoComplete="off"/>
        <br/>
        <input type="password"  onChange={(e) => setPassword(e.target.value)} placeholder="password" autoComplete="off"></input>
        <br/>
        <br/>
        <input type="submit" value="Log in" />
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