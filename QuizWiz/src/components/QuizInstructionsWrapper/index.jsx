import React, { useState } from 'react';
import QuizInstructions from './QuizInstructions';

const QuizInstructionsWrapper = () => {
  const [showInstructions, setShowInstructions] = useState(false);

  const toggleInstructions = () => {
    setShowInstructions(!showInstructions);
  };

  return (
    <div className="quiz-instructions-wrapper">
      {showInstructions && <QuizInstructions onClose={toggleInstructions} />}
      <button onClick={toggleInstructions}>Open Instructions</button>
    </div>
  );
};

export default QuizInstructionsWrapper;