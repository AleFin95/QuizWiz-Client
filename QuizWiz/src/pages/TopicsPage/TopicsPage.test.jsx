import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import { MemoryRouter, Route } from 'react-router-dom';
import * as matchers from '@testing-library/jest-dom/matchers';
import TopicsPage from './index';


expect.extend(matchers);

describe('TopicsPage Component', () => {
  beforeEach(() => {
    // Mock localStorage methods used in the component
    const localStorageMock = (() => {
      let store = {};
      return {
        getItem: (key) => store[key],
        setItem: (key, value) => {
          store[key] = value.toString();
        },
        clear: () => {
          store = {};
        },
      };
    })();
    Object.defineProperty(window, 'localStorage', {
      value: localStorageMock,
    });
  });

  it('should render topics page with a button to start the quiz', () => {
    render(
      <MemoryRouter initialEntries={['/topics']}>
        <TopicsPage />
      </MemoryRouter>
    );

    // Check if the 'Start Quiz' button exists
    const startQuizButton = screen.getByRole('button', { name: 'Start Quiz' });
    expect(startQuizButton).toBeInTheDocument();
  });

  it.skip('should redirect to the quiz page when Start Quiz button is clicked after selecting a topic', () => {
    const navigateMock = jest.fn();
    render(
      <MemoryRouter initialEntries={['/topics']}>
        <TopicsPage />
        <Route path='/test/quiz'>
          {/* Mock the quiz component */}
          <div data-testid='quiz-component'>Mocked Quiz Component</div>
        </Route>
      </MemoryRouter>
    );

    // Select a topic
    const topicLabel = screen.getByTestId('some-topic-id'); // Replace 'some-topic-id' with the actual test ID
    fireEvent.click(topicLabel);

    // Click the 'Start Quiz' button
    const startQuizButton = screen.getByRole('button', { name: 'Start Quiz' });
    fireEvent.click(startQuizButton);

    // Check if the navigation to the quiz page occurred
    expect(navigateMock).toHaveBeenCalledWith('/test/quiz');
  });

  // Add more test cases for various functionalities in the TopicsPage component
});
