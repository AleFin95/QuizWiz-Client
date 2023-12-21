import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const QuizInstructions = () => {
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
      >  <h2>Quiz Instructions</h2>
  <h3>Time to Challenge Yourself !</h3>
  <ol>
    <li> <b>Select a Topic:</b> <br/>Choose a topic from your notes to be quizzed on.</li>
    <li> <b>Answer Questions:</b> <br/>Each quiz consists of questions related to the<br/> selected topic.</li>
    <li> <b>Time Limit:</b> <br/>You have 5 minutes to answer each question,<br/> so stay focused!</li>
    <li> <b>Varying Questions:</b> <br/>The number of questions may vary based on <br/>the length of your notes' content.</li>
    <li> <b>Track Your Progress:</b> <br/>Check your past quiz results in the leaderboard<br/> and see how you've improved over time.</li>
  </ol>
  <p>If you don't succeed, consider reviewing <br/>your notes available 
      on the <Link to="/mynotes" className="my-notes-link" >My Notes</Link > page <br/>before attempting the quiz again.</p>
      </div>
    </div>
  );
};

export default QuizInstructions;
