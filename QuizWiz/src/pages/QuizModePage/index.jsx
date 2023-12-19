import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { QuizInstructionsWrapper } from '../../components';


const QuizModePage = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    async function loadQuestions() {
      const selectedTopicId = JSON.parse(localStorage.getItem('selectedTopic'));
      if (!selectedTopicId) {
        console.error('No selected topic ID found.');
        return;
      }
  
      try {
        const response = await fetch(`https://quizwiz-api.onrender.com/questions?topicId=${selectedTopicId}`);
        const responseData = await response.json();
  
        if (Array.isArray(responseData.data) && responseData.data.length > 0) {
          setQuestions(responseData.data);
        } else {
          console.error('Invalid data structure:', responseData);
        }
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    }
  
    loadQuestions();
  }, []);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <>
      <h1>QuizModePage</h1>
      {questions.length > 0 && currentQuestionIndex < questions.length && (
        <div>
          <div key={questions[currentQuestionIndex]._id}>
            <p>{questions[currentQuestionIndex].name}</p>
          </div>
          <button onClick={handlePrevQuestion} disabled={currentQuestionIndex === 0}>
            &lt; Prev Question
          </button>
          <button onClick={handleNextQuestion} disabled={currentQuestionIndex === questions.length - 1}>
            Next Question &gt;
          </button>
        </div>
      )}
      {currentQuestionIndex === questions.length && (
        <p>
          All questions answered! <Link to="/test/quiz/results">See Results</Link>
        </p>
      )}
      <QuizInstructionsWrapper />
    </>
  );
};

export default QuizModePage;