import React from 'react';
import { Routes, Route} from 'react-router-dom';

import * as Pages from './pages'
import { PageWrapper } from './components';
import './assets/app.css'


function App() {
    return (
      <>
        <PageWrapper />
        <Routes>
          <Route path="/" element={<Pages.HomePage />} />
          <Route path="/mynotes" element={<Pages.MyNotesPage />} />
  
          <Route path="/learn/*" element={
            <>
              <Routes>
                <Route path="/" element={<Pages.LearnPage />} />
                <Route path="timer" element={<Pages.TimerPage />} />
                <Route path="timer/addnotes" element={<Pages.AddNotesPage />} />
              </Routes>
            </>
          } />
  
          <Route path="/test/*" element={
            <> 
            <Routes>
              <Route path="/" element={<Pages.TestInstructionsPage />} />
              <Route path="topics" element={<Pages.TopicsPage />} />
              <Route path="topics/quiz" element={<Pages.QuizModePage />} />
              <Route path="topics/quiz/results" element={<Pages.ResultsPage />} />
            </Routes>
            </> 
          } />
  
          <Route path="*" element={<Pages.NotFoundPage />} />
        </Routes>
      </>
    );
  }

export default App;