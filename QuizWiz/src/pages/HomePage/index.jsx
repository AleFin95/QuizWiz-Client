import React from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/app.css";

const HomePage = () => {
  const navigate = useNavigate();

  const handleLearnClick = () => {
    // Navigate to the "/learn" route
    navigate("/learn");
  };

  const handleQuizClick = () => {
    // Navigate to the "/test" route
    navigate("/test");
  };

  return (
    <main>
      <h1>QuizWiz</h1>
      
          <button className="navigation-button" onClick={handleLearnClick}>
            Learn and Take Notes
          </button>
      
          <button className="navigation-button" onClick={handleQuizClick}>
            Go to Quiz
          </button>

    </main>
  );
};

export default HomePage;
