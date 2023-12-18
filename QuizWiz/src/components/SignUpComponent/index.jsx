import React from 'react'

const SignUpComponent = () => {
  return (
    <>
    <h2>Account Registration</h2>
    <form>
      <input type="text" name="username" placeholder = "username"autoComplete="off"/>
      <br/>
      <input type="password" name="password" placeholder="password"autoComplete="off"/> 
      <br/> 
      <br/>
      <input type="submit" value="Register"/>
    </form>
    </>
  )
  
}

export default SignUpComponent