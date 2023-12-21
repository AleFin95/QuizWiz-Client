import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';
import Swal from 'sweetalert2';
import { AnswersBox, QuizInstructionsWrapper, Timer } from '../../components';

const QuizModePage = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isQuestionsGenerated, setIsQuestionsGenerated] = useState(false);
  const subjectId = JSON.parse(localStorage.getItem('selectedTopic'));
  const navigate = useNavigate();

  useEffect(() => {
    const loadQuestions = async () => {
      try {
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            subjectId: subjectId
          })
        };
        const response = await fetch(
          `https://quizwiz-api.onrender.com/questions`,
          options
        );
        const data = await response.json();

        if (!data.questions && !data.answers) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: data
          }).then(() => navigate('/'));
        }

        if (
          Array.isArray(data.questions) &&
          Array.isArray(data.answers) &&
          data.questions.length > 0 &&
          data.answers.length > 0
        ) {
          setQuestions(data.questions);
          setAnswers(data.answers);
          setIsQuestionsGenerated(true);
        }
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Error fetching questions:',
          error
        });
      }
    };

    loadQuestions();
  }, []);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleSubmit = () => {
    const options = {
      headers: {
        Authorization: localStorage.getItem('token')
      },
      method: 'POST'
    };
  };

  return (
    <>
      <div className='quiz'>
        {!isQuestionsGenerated && (
          <div className='loading-container'>
            <h2>Generating questions from your notes...</h2>
            <ClimbingBoxLoader color='#36d7b7' size={25} />
          </div>
        )}
        {isQuestionsGenerated && (
          <>
            {questions.length > 0 &&
              currentQuestionIndex < questions.length && (
                <div className='question-container'>
                  <Timer flag_page={'quiz'} length={questions.length} />
                  <div key={questions[currentQuestionIndex]._id}>
                    <h3>{questions[currentQuestionIndex].name}</h3>
                  </div>
                  <div>
                    <AnswersBox
                      answers={answers}
                      currentQuestionIndex={currentQuestionIndex}
                      length={questions.length}
                    />
                  </div>
                  <div className='navigation-buttons-container'>
                    <button
                      className='navigation-button'
                      onClick={handleNextQuestion}
                      hidden={currentQuestionIndex === questions.length - 1}
                    >
                      Next &gt;
                    </button>
                    <button
                      className='navigation-button'
                      onClick={handleSubmit}
                      hidden={currentQuestionIndex === questions.length}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              )}
            {currentQuestionIndex === questions.length && (
              <p>
                All questions answered!
                <Link to='/test/quiz/results'>See Results</Link>
              </p>
            )}
          </>
        )}
      </div>
      <QuizInstructionsWrapper />
    </>
  );
};

export default QuizModePage;
