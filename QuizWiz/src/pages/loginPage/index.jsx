import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts'

const Login = () => {
    const [inputValue, setInputValue] = useState ("")
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




  return (
    <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInput} value={inputValue} placeholder='username' autoComplete="off"/>
        <br/>
        <input type="submit"/>
    </form>
  )
}

export default Login