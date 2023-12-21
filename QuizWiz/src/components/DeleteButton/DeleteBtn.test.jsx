import * as matchers from '@testing-library/jest-dom/matchers';
import { render, screen, cleanup } from '@testing-library/react';
import React from 'react';
import { describe, expect, it, beforeEach } from 'vitest';
import DeleteButton from './index'; 

expect.extend(matchers);

describe('DeleteButton component', () => {
    beforeEach(() => {
      cleanup();
    });
  
    it('should render a delete button', () => {
      const mockDeleteFunction = () => {}; // Mock delete function
  
      render(<DeleteButton deleteNotes={mockDeleteFunction} id={1} />);
  
      const deleteButton = screen.getByRole('button', { class: 'delete-button' });
      expect(deleteButton).toBeTruthy();
    });
  
    it('should invoke deleteNotes function when clicked', () => {
      let clicked = false;
      const mockDeleteFunction = () => {
        clicked = true;
      };
  
      render(<DeleteButton deleteNotes={mockDeleteFunction} id={1} />);
  
      const deleteButton = screen.getByRole('button', { class: 'delete-button' });
      deleteButton.click();
  
      expect(clicked).toBe(true);
    });
  });