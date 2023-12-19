import * as matchers from '@testing-library/jest-dom/matchers';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import TimerPage from '.';
import { AuthProvider } from '../../contexts';

expect.extend(matchers);


describe('TimerPage Component', () => {
    render(
        <MemoryRouter>
            <AuthProvider>
          <TimerPage />
          </AuthProvider>
        </MemoryRouter>
      );
    it('displays "Countdown Timer', () => {
        expect(screen.getByText(/Countdown Timer/i)).toBeInTheDocument();
    });

    it('updates countdown timer when start button is clicked', async () => {
    
        // Initial timer value
        const timerTextBefore = screen.getByText(/Countdown Timer:/i).textContent;
        expect(timerTextBefore).toBe('Countdown Timer: 0:0')

      });

  
  });
