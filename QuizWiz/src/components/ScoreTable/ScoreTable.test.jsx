import * as matchers from '@testing-library/jest-dom/matchers';
import { render, screen, cleanup } from '@testing-library/react';
import React from 'react';
import { describe, expect, it, beforeEach } from 'vitest';
import ScoreTable from './index'; 

expect.extend(matchers);
describe('ScoreTable component', () => {
    beforeEach(() => {
        cleanup(); 
    });
    it('should return a table row with rank, subject name, and score value when score data is available', () => {
      const score = {
        subjectName: 'Math',
        value: 90
      };
      const rank = 1;
  
      render(<ScoreTable score={score} rank={rank} />);
  
      const tableRow = screen.getByRole('row');
      const columns = screen.getAllByRole('cell');
  
      expect(tableRow).toBeInTheDocument();
      expect(columns[0]).toHaveTextContent(rank.toString());
      expect(columns[1]).toHaveTextContent(score.subjectName);
      expect(columns[2]).toHaveTextContent(score.value.toString());
    });

    it('should return a "No score data available" message when score is falsy', () => {
        render(<ScoreTable score={null} rank={1} />);
    
        const noScoreMessage = screen.getByText('No score data available');
        expect(noScoreMessage).toBeInTheDocument();
    });

    it('should return a table row with rank, subject name, and score value when score data is available and rank is not provided', () => {
        const score = {
          subjectName: 'Math',
          value: 90
        };
    
        render(<ScoreTable score={score} />);
    
        const allRows = screen.getAllByRole('row');
        
        
        const filteredRows = allRows.filter(row =>
          row.textContent.includes(score.subjectName) &&
          row.textContent.includes(score.value.toString())
        );
    
        
        expect(filteredRows.length).toBe(1);
    
        
        const columns = filteredRows[0].querySelectorAll('td');
        expect(columns[0]).toHaveTextContent(''); 
        expect(columns[1]).toHaveTextContent('Math');
        expect(columns[2]).toHaveTextContent('90');
    });
  });
