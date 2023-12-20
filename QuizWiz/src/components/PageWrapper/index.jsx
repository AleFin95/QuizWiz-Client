import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts';

const PageWrapper = () => {
  const { setToken, token } = useAuth();
  const navigateTo = useNavigate();

  const handleLogout = async () => {
    try {
      const options = {
        method: 'POST', // Use POST method for logout
        headers: {
          Authorization: localStorage.getItem('token')
        }
      };

      const response = await fetch(
        'https://quizwiz-api.onrender.com/users/logout',
        options
      );

      if (response.status === 200) {
        localStorage.removeItem('token');
        setToken('');
        navigateTo('/');
      } else {
        console.error('Logout failed:', response.status);
      }
    };

    const response = await fetch(
      'https://quizwiz-api.onrender.com/users/logout',
      options
    );

    if (response.status == 200) {
      localStorage.removeItem('token');
      setToken('');
      navigateTo('/');
    }
  };

  return (
    <div className='page-wrapper'>
      <header className='sticky-header'>
        <nav>
          <NavLink to='/'>Home</NavLink>
          {token && <NavLink to='/mynotes'>My Notes</NavLink>}
          {token && <button onClick={handleLogout}>Log Out</button>}
        </nav>
      </header>
    </div>
  );
};

export default PageWrapper;