import React from 'react';
import { NavLink } from 'react-router-dom';

const PageWrapper = () => {
    return <>
        <header>
            <nav>
                <NavLink to="/" >Home</NavLink>
                <NavLink to="/mynotes">My Notes</NavLink>
            </nav>
        </header>
    </>
};

export default PageWrapper;