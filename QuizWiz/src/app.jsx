import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './assets/app.css';
import { PageWrapper } from './components';
import * as Pages from './pages';
import ProtectedRoute from './routes';

import { SignUpComponent } from './components';
import { AuthProvider } from './contexts';

function App() {
  const location = useLocation();
  const showPageWrapper =
    location.pathname !== '/login' && location.pathname !== '/signup';

  return (
    <AuthProvider>
      {showPageWrapper && <PageWrapper />}
      <Routes>
        <Route path='/login' element={<Pages.Login />} />
        <Route path='/signup' element={<SignUpComponent />} />

        <Route path='/' element={<ProtectedRoute redirectTo='/login' />}>
          <Route index element={<Pages.HomePage />} />
        </Route>

        <Route path='/mynotes' element={<Pages.MyNotesPage />} />

        <Route
          path='/learn/*'
          element={
            <>
              <Routes>
                <Route path='/' element={<Pages.TimerPage />} />
                <Route path='addnotes' element={<Pages.AddNotesPage />} />
              </Routes>
            </>
          }
        />

        <Route
          path='/test/*'
          element={
            <>
              <Routes>
                <Route path='/' element={<Pages.TopicsPage />} />
                <Route path='quiz' element={<Pages.QuizModePage />} />
                <Route path='quiz/results' element={<Pages.ResultsPage />} />
              </Routes>
            </>
          }
        />
        <Route path='/leaderboard' element={<Pages.Leaderboard/>} />
        <Route path='*' element={<Pages.NotFoundPage />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
