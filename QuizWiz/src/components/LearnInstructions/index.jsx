import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const LearnInstructions = () => {
  const [showInstructions, setShowInstructions] = useState(true);

  const handleIconClick = () => {
    setShowInstructions(!showInstructions);
  };

  return (
    <div className='quiz-instructions-wrapper'>
      <div className='quiz-icon-container'>
        <FontAwesomeIcon
          icon={faInfoCircle}
          className='quiz-icon'
          onClick={handleIconClick}
        />
      </div>
      <div
        className={`quiz-instructions-container ${
          showInstructions ? 'visible' : 'hidden'
        }`}
      >
        <h2>Learn Instructions</h2>
        <h3>Welcome to Your <br/> Personal Learning Journey!</h3>
        <ol>
          <li> <b>Create your own topics:</b> <br/>take notes and enhance your knowledge.</li>
          <li> <b>Set a Learning Timer:</b> Boost your concentration <br/> by setting a timer for focused learning sessions.</li>
          <li> <b>Prepare for Quizzes:</b> Your custom notes will <br/>serve as your study material for quizzes later on. </li>
        </ol>
      </div>
    </div>
  );
};

export default LearnInstructions;
