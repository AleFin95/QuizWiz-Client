import React from 'react';
import { Routes, Route} from 'react-router-dom';
import ProtectedRoute from "./routes"
import * as Pages from './pages'
import { PageWrapper } from './components';
import './assets/app.css'

import { AuthProvider } from './contexts';


function App() {
    return (
      <AuthProvider>
        <PageWrapper />
        <Routes>
          <Route path="/login" element={<Pages.Login />}/>
          <Route path="/" element={<ProtectedRoute redirectTo="/login"/>}>
            <Route index element={<Pages.HomePage />}/>
          </Route>

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
    </AuthProvider>
    );
  }

export default App;