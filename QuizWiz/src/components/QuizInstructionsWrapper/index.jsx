import React, { useState } from 'react';
import {QuizInstructions} from "../index";

const QuizInstructionsWrapper = () => {
  const [showInstructions, setShowInstructions] = useState(false);

  const toggleInstructions = () => {
    setShowInstructions(!showInstructions);
  };

  return (
    <div>
      {showInstructions && <QuizInstructions onClose={toggleInstructions} />}
      <button onClick={toggleInstructions}>Open Instructions</button>
    </div>
  );
};

export default QuizInstructionsWrapper;