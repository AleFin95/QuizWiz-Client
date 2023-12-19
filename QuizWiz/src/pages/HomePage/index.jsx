import React from 'react';
import { Link } from 'react-router-dom';


const HomePage = () => {
    return <main>
        <h1>Home </h1>
        <ul>
            <li><Link to="/learn" >Learn and Take Notes</Link></li>
            <li><Link to="/test" >Go to Quiz</Link></li>
        </ul>
    </main>
};

export default HomePage;