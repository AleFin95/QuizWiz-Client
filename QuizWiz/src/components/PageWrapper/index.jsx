import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../contexts';

const PageWrapper = () => {
    const {user,logOut} = useAuth()
    return <>
        <header>
            <nav>
                <NavLink to="/" >Home</NavLink>
                {user && <NavLink to="/mynotes">My Notes</NavLink>}
                {user && (<NavLink to="/login" onClick={logOut}> Log Out</NavLink>)}
            </nav>
        </header>
    </>
};

export default PageWrapper;