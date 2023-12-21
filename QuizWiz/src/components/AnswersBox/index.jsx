import React, { useEffect, useState } from 'react';

const Answers = ({ answers, currentQuestionIndex }) => {
  const [scores, setScores] = useState([]);
  const [disabled, setDisabled] = useState(false);
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

  const handleClick = (e, isCorrect) => {
    if (isCorrect) {
      e.target.classList.add('answer-correct');

      setScores([...scores, 1]);
      setDisabled(true);
    } else {
      e.target.classList.add('answer-incorrect');

      let answers = e.target.parentElement.children;

      for (let i = 0; i < answers.length; i++) {
        if (answers[i].value === 'true') {
          answers[i].classList.add('answer-correct');
        }
      }

      setScores([...scores, 0]);
      setDisabled(true);
    }
  };

  return (
    <div>
      <ul className='answers'>
        {currentAnswers.map((answer) => (
          <button
            disabled={disabled}
            value={answer.isCorrect}
            className='answer'
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
