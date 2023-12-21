import * as matchers from '@testing-library/jest-dom/matchers';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { beforeEach, describe, expect, it } from 'vitest';
import QuizInstructions from './index';

expect.extend(matchers);

describe('QuizInstructions', () => {
  beforeEach(() => {
    cleanup();
  });

  // Renders the quiz instructions container with a visible icon.
  it('should render the quiz instructions container with a visible icon', () => {
    render(
      <MemoryRouter>
        <QuizInstructions />
      </MemoryRouter>
    );
    const icon = screen.getByTestId('icon-faInfoCircle');
    expect(icon).toBeInTheDocument();
  });

  it('Displays the Quiz Instructions content', () => {
    render(
      <MemoryRouter>
        <QuizInstructions />
      </MemoryRouter>
    );

    const quizInstructionsHeader = screen.getByRole('heading', {
      name: 'Quiz Instructions'
    });
    const welcomeHeader = screen.getByRole('heading', {
      name: 'Time to Challenge Yourself !'
    });

    const selectTopicItem = screen.getByText('Select a Topic:');
    const setTimerItem = screen.getByText('Time Limit:');
    const progress = screen.getByText('Track Your Progress:');

    expect(quizInstructionsHeader).toBeTruthy();
    expect(welcomeHeader).toBeTruthy();
    expect(selectTopicItem).toBeTruthy();
    expect(setTimerItem).toBeTruthy();
    expect(progress).toBeTruthy();
  });

  it('Displays the icon and is clickable', () => {
    render(
      <MemoryRouter>
        <QuizInstructions />
      </MemoryRouter>
    );
    const icon = screen.getByTestId('icon-faInfoCircle');
    expect(icon).toBeInTheDocument();
    fireEvent.click(icon);
  });

  it('renders the Link', () => {
    render(
      <MemoryRouter>
        <QuizInstructions />
      </MemoryRouter>
    );

    const linkElement = screen.getByRole('link', { name: /My Notes/i });

    expect(linkElement).toBeInTheDocument();
  });

  it.skip('navigates to the correct route when clicked', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <QuizInstructions />
      </MemoryRouter>
    );

    // Use screen to query for the link element
    const linkElement = screen.getByRole('link', { name: /My Notes/i });

    fireEvent.click(linkElement);

    // Check the current route after the click
    expect(window.location.pathname).toBe('/mynotes');
  });
});
