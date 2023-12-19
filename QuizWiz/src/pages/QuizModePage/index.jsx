import React from 'react'
import { Link } from "react-router-dom";
import { QuizInstructionsWrapper } from '../../components';

const QuizModePage = () => {
  return (
    <>
    <h1>QuizModePage</h1>
    <p><Link to="/test/quiz/results" >Results</Link></p>
    <QuizInstructionsWrapper />
    </>
  )
}

export default QuizModePage