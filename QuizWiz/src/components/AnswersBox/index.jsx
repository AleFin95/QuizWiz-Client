import React, { useState, useEffect } from 'react';

const Answers = ({ questionId }) => {
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    async function fetchAnswers() {
      try {
        const response = await fetch(`https://quizwiz-api.onrender.com/answers/${questionId}`);
        const data = await response.json();
        console.log(data)
        setAnswers(data);
      } catch (error) {
        console.error('Error fetching answers:', error);
      }
    }

    fetchAnswers();
  }, [questionId]);

  return (
    <div>
      <h2>Answers:</h2>
      <ul>
        {answers.map((answer) => (
          <li key={answer._id}>
            {answer.text} - {answer.isCorrect ? 'Correct' : 'Incorrect'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Answers;