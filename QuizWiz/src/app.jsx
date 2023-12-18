import React from 'react';
import { Routes, Route} from 'react-router-dom';
import ProtectedRoute from "./ro"
import * as Pages from './pages'
import { PageWrapper } from './components';
import './assets/app.css'


function App() {
    return (
      <>
        <PageWrapper />
        <Routes>
          <Route path="/" element={<ProtectedRoute redirectTo="/login"/>}>
            <Route index element={<Pages.HomePage />}> </Route>
          </Route>
          <Route path="/login" element={<Pages.Login />}/>
          <Route path="/mynotes" element={<Pages.MyNotesPage />} />
  
          <Route path="/learn/*" element={
            <>
              <Routes>
                <Route path="/" element={<Pages.TimerPage />} />
                <Route path="addnotes" element={<Pages.AddNotesPage />} />
              </Routes>
            </>
          } />
  
          <Route path="/test/*" element={
            <> 
            <Routes>
              <Route path="/"  element={<Pages.TopicsPage />} />
              <Route path="quiz" element={<Pages.QuizModePage />} />
              <Route path="quiz/results" element={<Pages.ResultsPage />} />
            </Routes>
            </> 
          } />
  
          <Route path="*" element={<Pages.NotFoundPage />} />
        </Routes>
      </>
    );
  }

export default App;