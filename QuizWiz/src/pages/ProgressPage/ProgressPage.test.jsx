import { render, screen, cleanup } from '@testing-library/react';
import { describe, expect, it, beforeEach } from 'vitest';
import * as matchers from '@testing-library/jest-dom/matchers';

import ProgressPage from './index';

expect.extend(matchers);
describe('Progress component', () => {
    beforeEach(() => {
        cleanup(); 
    });
        
    it('should render an h2 element with text \'My Progress\' when rendered', () => {
        render(<ProgressPage />);
        const heading = screen.getByRole('heading', { name: /my progress/i });
        expect(heading).toBeInTheDocument();
    });

    
    it('should render a div with class \'ProgressPage\' when rendered', () => {
    render(<ProgressPage />);
    const progressPage = screen.getByTestId('progress-page');
    expect(progressPage).toBeInTheDocument();
    expect(progressPage).toHaveClass('ProgressPage');
    });

    it('should render the table headers \'Rank\', \'Subject\', and \'Score\' when rendered', () => {
        render(<ProgressPage />);
        const rankHeader = screen.getByRole('columnheader', { name: /rank/i });
        const subjectHeader = screen.getByRole('columnheader', { name: /subject/i });
        const scoreHeader = screen.getByRole('columnheader', { name: /score/i });
        expect(rankHeader).toBeInTheDocument();
        expect(subjectHeader).toBeInTheDocument();
        expect(scoreHeader).toBeInTheDocument();
    });

});
