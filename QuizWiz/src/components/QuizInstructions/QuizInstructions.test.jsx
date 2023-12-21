import * as matchers from '@testing-library/jest-dom/matchers';
import { render, screen, cleanup, fireEvent} from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import QuizInstructions from '.';
import { AuthProvider } from '../../contexts';
import { MemoryRouter } from 'react-router-dom';




expect.extend(matchers);
describe('QuizInstructions', () => {
    afterEach(() => {
      cleanup();
    });

    it('Displays the Quiz Instructions content', () => {
      render(<QuizInstructions />);
  
      const quizInstructionsHeader = screen.getByRole('heading', {
        name: "Quiz Instructions",
      });
      const welcomeHeader = screen.getByRole('heading', {
        name: "Time to Challenge Yourself !",
      });
  
      const selectTopicItem = screen.getByText(
        'Select a Topic:'
      );
      const setTimerItem = screen.getByText(
        'Time Limit:'
      );
      const progress = screen.getByText(
        'Track Your Progress:'
      );
  
      expect(quizInstructionsHeader).to.exist;
      expect(welcomeHeader).to.exist;
      expect(selectTopicItem).to.exist;
      expect(setTimerItem).to.exist;
      expect(progress).to.exist;
    });
  
    it('Displays the icon and is clickable', () => {
        render(<QuizInstructions />);
        const icon = screen.getByTestId('icon-faInfoCircle');
        expect(icon).toBeInTheDocument();
        fireEvent.click(icon);
      });

      it('renders the Link', () => {
        render(<QuizInstructions />);
        
        const linkElement = screen.getByRole('link', { name: /My Notes/i });
    
        expect(linkElement).toBeInTheDocument();
      });
    
      it('navigates to the correct route when clicked', () => {
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