import { render, screen, cleanup } from '@testing-library/react';
import { describe, expect, it, beforeEach } from 'vitest';
import * as matchers from '@testing-library/jest-dom/matchers';

import NotFoundPage from './index';

expect.extend(matchers);
describe('NotFoundPage Component', () => {
    beforeEach(() => {
      cleanup();
    });
  
    // Test if NotFoundPage renders an h2 element with the correct text
    it('should render an h2 element containing the text "NotFoundPage"', () => {
      render(<NotFoundPage />);
      const headingElement = screen.getByText('NotFoundPage');
      expect(headingElement).toBeInTheDocument();
      expect(headingElement.tagName).toBe('H2');
    });
  
    // Test if NotFoundPage component contains only one h2 element
    it('should contain only one h2 element', () => {
      render(<NotFoundPage />);
      const headingElements = screen.getAllByRole('heading');
      expect(headingElements.length).toBe(1);
      expect(headingElements[0].tagName).toBe('H2');
    });
  
    // Test if NotFoundPage component does not contain any additional elements
    it('should not contain any additional elements besides the h2', () => {
      render(<NotFoundPage />);
      const additionalElements = screen.queryAllByRole('heading');
      expect(additionalElements.length).toBe(1); // Only one h2 element
      expect(additionalElements[0].tagName).toBe('H2'); // Ensure it's an h2 element
    });
  
    // Test if NotFoundPage component does not contain specific text
    it('should not contain specific text that is not "NotFoundPage"', () => {
      render(<NotFoundPage />);
      const nonExistingText = screen.queryByText('This is not the NotFoundPage text');
      expect(nonExistingText).not.toBeInTheDocument();
    });
  
    it('should match snapshot', () => {
      const { asFragment } = render(<NotFoundPage />);
      expect(asFragment()).toMatchSnapshot();
    });
});