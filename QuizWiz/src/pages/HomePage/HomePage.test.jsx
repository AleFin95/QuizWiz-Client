import * as matchers from '@testing-library/jest-dom/matchers';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import HomePage from '../../pages/HomePage'; 


expect.extend(matchers);

describe('HomePage', () => {
  render(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>
  );

  it('renders correctly', () => {
    expect(screen.getByRole('heading', { name: /QuizWiz/i })).toBeInTheDocument();
    console.log('testing');
    expect(
      screen.getByRole('link', { name: /Learn and Take Notes/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /Go to Quiz/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /Learn and Take Notes/i })
    ).toHaveAttribute('href', '/learn');
    expect(
      screen.getByRole('link', { name: /Go to Quiz/i })
    ).toHaveAttribute('href', '/test');
  });
});
