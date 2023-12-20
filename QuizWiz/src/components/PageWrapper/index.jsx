import React from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts';

const PageWrapper = () => {
    const {setToken, token} = useAuth()
    const navigateTo = useNavigate()



    const handleClick = async () => {
        const options = {
            headers: {
              Authorization: localStorage.getItem('token')
            }
          };
      
          const response = await fetch(
            'https://quizwiz-api.onrender.com/users/logout',
            options
          );
          const data = await response.json();
      
          if (response.status == 200) {
            localStorage.removeItem('token');
            setToken("")
            navigateTo('/');
          }

    }   
    
    
    return (
      <div className="page-wrapper">
        <header className="sticky-header">
          <nav>
            <NavLink to="/">Home</NavLink>
            {token && <NavLink to="/mynotes">My Notes</NavLink>}
            {token && (
              <NavLink to="/login" onClick={handleClick}>
                Log Out
              </NavLink>
            )}
          </nav>
        </header>
      </div>
    );
  };

export default PageWrapper;