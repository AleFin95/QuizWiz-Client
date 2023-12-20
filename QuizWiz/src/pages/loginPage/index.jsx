import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/app.css';
import { SignUpComponent } from '../../components';
import { useAuth } from '../../contexts';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogIn, setShowLogIn] = useState(true);
  const navigateTo = useNavigate();
  const { setToken } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      };

      const response = await fetch(
        'https://quizwiz-api.onrender.com/users/login',
        options
      );

      if (response.status === 200) {
        const { token } = await response.json();
        localStorage.setItem('token', token);
        setToken(token);
        navigateTo('/');
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  function handleSignUpClick() {
    setShowLogIn(!showLogIn);
    setShowSignUp(!showSignUp);
  }

  return (
    <div className='loginPage'>
      <div className='loginHeader'>
        <h1>QuizWiz</h1>
      </div>
      {showLogIn && (
        <>
          <div className='login'>
            <h2>Log In</h2>
            <form className='loginForm' onSubmit={handleSubmit}>
              <input
                type='text'
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder='email'
                autoComplete='off'
              />
              <input
                type='password'
                required
                onChange={(e) => setPassword(e.target.value)}
                placeholder='password'
                autoComplete='off'
              ></input>
              <input type='submit' value='Log in' className='login-button' />
              <p>
                No account?
                <button type='button' onClick={handleSignUpClick}>
                  Sign up
                </button>
              </p>
            </form>
          </div>
        </>
      )}
      {showSignUp && <SignUpComponent handleSignUpClick={handleSignUpClick} />}
    </div>
  );
};

export default Login;
