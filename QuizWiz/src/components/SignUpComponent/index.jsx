import React, { useState } from 'react';

const SignUpComponent = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistrationSuccessful, setRegistrationSuccessful] = useState(false);

  const handleClick = async () => {
    try {
      const options =  {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
        }),
      }
      const response = await fetch("https://quizwiz-api.onrender.com/users/register", options);
      const data = await response.json();
      await new Promise(resolve => setTimeout(resolve, 1000));

      setRegistrationSuccessful(true);
  } catch (error) {
     console.error('Registration error:', error);
  }
};
return (
  <>
    {!isRegistrationSuccessful && (
      <>
        <h2>Account Registration</h2>
        <form>
          <input type="text" name="username" placeholder="username" autoComplete="off" onChange={(e) => setUsername(e.target.value)} />
          <br />
           <input type="text" name="email" placeholder="email" autoComplete="off" onChange={(e) => setEmail(e.target.value)} />
          <br />
          <input type="password" name="password" placeholder="password" autoComplete="off" onChange={(e) => setPassword(e.target.value)}/>
          <br />
          <br />
          <input type="button" onClick={handleClick} value="Register" />
        </form>
      </>
    )}
    {isRegistrationSuccessful && <p>Account successfully created! You can Log In !</p>}
  </>
);
};

export default SignUpComponent;