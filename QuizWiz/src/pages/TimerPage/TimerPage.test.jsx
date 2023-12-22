import * as matchers from '@testing-library/jest-dom/matchers';
import React from 'react';
import { render, screen, cleanup } from  '@testing-library/react';
import { describe, expect, it, beforeEach, afterEach } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import TimerPage from '.';

expect.extend(matchers);

// Mock the useAuth hook
const useAuthMock = () => ({ remainingSeconds: 60 });

describe('TimerPage Component', () => {
  beforeEach(() => {
    cleanup();
  });

  it('renders Timer and LearnInstructionsWrapper components', () => {
    render(
      <MemoryRouter>
        <TimerPage />
      </MemoryRouter>,
      { mocks: { useAuth: useAuthMock } }
    );

    // Assert the existence of Timer component
    assert.isNotNull(screen.getByTestId('timer-component'));

    // Assert the existence of LearnInstructionsWrapper component
    assert.isNotNull(screen.getByTestId('learn-instructions-wrapper'));
  });

});