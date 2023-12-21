import * as matchers from '@testing-library/jest-dom/matchers';
import { render, screen, cleanup, fireEvent} from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import LearnInstructions from '.';

expect.extend(matchers);
describe('LearnInstructions', () => {
    afterEach(() => {
      cleanup();
    });
  
    it('Displays the Learn Instructions content', () => {
      render(<LearnInstructions />);
  
      const learnInstructionsHeader = screen.getByRole('heading', {
        name: "Learn Instructions",
      });
      const welcomeHeader = screen.getByRole('heading', {
        name: "Welcome to Your Personal Learning Journey!",
      });
  
      const createTopicItem = screen.getByText(
        'Create your own topics:'
      );
      const setTimerItem = screen.getByText(
        'Set a Learning Timer:'
      );
      const prepareQuizzesItem = screen.getByText(
        'Prepare for Quizzes:'
      );
  
      expect(learnInstructionsHeader).to.exist;
      expect(welcomeHeader).to.exist;
      expect(createTopicItem).to.exist;
      expect(setTimerItem).to.exist;
      expect(prepareQuizzesItem).to.exist;
    });
  
    it('Displays the icon and is clickable', () => {
        render(<LearnInstructions />);
        const icon = screen.getByTestId('icon-faInfoCircle');
        expect(icon).toBeInTheDocument();
        fireEvent.click(icon);
      });
  });
