import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/app.css';

const HomePage = () => {
  const navigate = useNavigate();

  const handleLearnClick = () => {
    navigate('/learn');
  };

  const handleQuizClick = () => {
    navigate('/test');
  };

  return (
    <main>
      <h1>QuizWiz</h1>
  
      <div className="navigation-buttons-container">
        <button className='navigation-button' onClick={handleLearnClick}>
          Learn and Take Notes
        </button>
  
        <button className='navigation-button' onClick={handleQuizClick}>
          Go to Quiz
        </button>
      </div>
    </main>
  );
  
};

export default HomePage;
