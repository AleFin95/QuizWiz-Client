import React, { useState } from 'react';

const SignUpComponent = ({ handleSignUpClick }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistrationSuccessful, setRegistrationSuccessful] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password
        })
      };

      const response = await fetch(
        'https://quizwiz-api.onrender.com/users/register',
        options
      );

      if (response.status === 201) {
        setRegistrationSuccessful(true);
        handleSignUpClick();
      }
    } catch (error) {
      console.error('Registration error:', error);
    }
  };
  return (
    <>
      {!isRegistrationSuccessful && (
        <div className='login'>
          <h2>Sign Up</h2>
          <form className='loginForm' onSubmit={handleSubmit}>
            <input
              type='text'
              value={username}
              required
              placeholder='username'
              autoComplete='off'
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type='text'
              value={email}
              required
              placeholder='email'
              autoComplete='off'
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type='password'
              required
              placeholder='password'
              autoComplete='off'
              onChange={(e) => setPassword(e.target.value)}
            />
            <input type='submit' value='Register' className='login-button' />
            <p>
              Got an account?
              <button type='button' onClick={handleSignUpClick}>
                Log in
              </button>
            </p>
          </form>
        </div>
      )}
      {isRegistrationSuccessful && (
        <p>Account successfully created! You can Log In !</p>
      )}
    </>
  );
};

export default SignUpComponent;
