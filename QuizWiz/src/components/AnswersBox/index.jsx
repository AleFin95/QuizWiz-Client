import React, { useEffect, useState } from 'react';

const Answers = ({
  answers,
  currentQuestionIndex,
  disabled,
  setDisabled,
  handleClick
}) => {
  const [currentAnswers, setCurrentAnswers] = useState([]);

  useEffect(() => {
    const fetchCurrentAnswers = async () => {
      let currArray = [];
      for (
        let i = currentQuestionIndex * 4;
        i < currentQuestionIndex * 4 + 4;
        i++
      ) {
        currArray.push(answers[i]);
      }
      setCurrentAnswers(currArray);
      setDisabled(false);
    };

    fetchCurrentAnswers();
    console.log();
  }, [currentQuestionIndex]);

  return (
    <div>
      <ul className='answers'>
        {currentAnswers.map((answer) => (
          <button
            disabled={disabled}
            value={answer.isCorrect}
            className='button-83'
            key={answer._id}
            onClick={(e) => handleClick(e, answer.isCorrect)}
          >
            {answer.text}
          </button>
        ))}
      </ul>
    </div>
  );
};

export default Answers;
