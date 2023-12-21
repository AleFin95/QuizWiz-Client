import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useAuth } from '../../contexts';

const PageWrapper = () => {
  const { setToken, token } = useAuth();
  const navigateTo = useNavigate();

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

    if (response.status == 200) {
      localStorage.removeItem('token');
      setToken('');

      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });

      Toast.fire({
        icon: 'success',
        title: 'You have successfully logged out'
      });
      navigateTo('/');
    }
  };

  return (
    <div className='page-wrapper' data-testid="page-wrapper">
      <header className='sticky-header' data-testid="sticky-header">
        <nav>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/mynotes'>My Notes</NavLink>
          <NavLink to='/progress'>My Progress</NavLink>
          <NavLink to='/login' onClick={handleClick}>
              Log Out
          </NavLink>
        </nav>
      </header>
    </div>
  );
};

export default PageWrapper;
