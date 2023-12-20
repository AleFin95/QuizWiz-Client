import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const QuizInstructions = () => {
  const [showInstructions, setShowInstructions] = useState(true);

  const handleIconClick = () => {
    setShowInstructions(!showInstructions);
  };


  return (
    <div className="quiz-instructions-wrapper">
      <div className="quiz-icon-container">
        <FontAwesomeIcon icon={faInfoCircle} className="quiz-icon" onClick={handleIconClick} />
      </div>
      <div className={`quiz-instructions-container ${showInstructions ? 'visible' : 'hidden'}`}>
        <h2>Quiz Instructions</h2>
        <p>Insert your quiz instructions here.</p>
      </div>
    </div>
  );
};

export default QuizInstructions;
