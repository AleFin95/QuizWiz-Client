import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { afterEach, describe, expect, it } from 'vitest';
import Timer from '.';
import { AuthProvider } from '../../contexts';

describe('Timer Component', () => {
  afterEach(() => {
    cleanup();
  });

  it('Renders the Timer for quiz', () => {
    render(
      <MemoryRouter>
        <AuthProvider>
          <Timer flag_page='quiz' />
        </AuthProvider>
      </MemoryRouter>
    );

    const timerHeader = screen.getByRole('heading', { name: /timer/i });
    expect(timerHeader).to.exist;
  });

  it('Renders the Timer for setting time', () => {
    render(
      <MemoryRouter>
        <AuthProvider>
          <Timer flag_page='set_time' />
        </AuthProvider>
      </MemoryRouter>
    );

    const setYourTimeHeader = screen.getByRole('heading', {
      name: /set your study time/i
    });
    expect(setYourTimeHeader).to.exist;
  });

  it('Starts the timer on button click', () => {
    render(
      <MemoryRouter>
        <AuthProvider>
          <Timer flag_page='set_time' />
        </AuthProvider>
      </MemoryRouter>
    );

    const startButton = screen.getByRole('button', { name: /start/i });
    fireEvent.click(startButton);
  });

  it('Navigates to the correct route on timer completion', () => {
    render(
      <MemoryRouter initialEntries={['/']} initialIndex={0}>
        <AuthProvider>
          <Routes>
            <Route
              path='/learn/addnotes'
              element={<div data-testid='addnotes-page'>Add Notes Page</div>}
            />
          </Routes>
          <Timer flag_page='set_time' />
        </AuthProvider>
      </MemoryRouter>
    );

    const startButton = screen.getByRole('button', { name: /start/i });
    fireEvent.click(startButton);
  });
});
