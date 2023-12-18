import * as matchers from '@testing-library/jest-dom/matchers';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import HomePage from '.';

expect.extend(matchers);
describe('HomePage', () => {
  render(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>
  );

  it('renders correctly', () => {
    expect(screen.getByRole('heading', { name: /home/i })).toBeInTheDocument();
    console.log('testing');
    expect(
      screen.getByRole('link', { name: /learn and take notes/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /go to quiz/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /learn and take notes/i })
    ).toHaveAttribute('href', '/learn');
    expect(screen.getByRole('link', { name: /go to quiz/i })).toHaveAttribute(
      'href',
      '/test'
    );
  });
});













