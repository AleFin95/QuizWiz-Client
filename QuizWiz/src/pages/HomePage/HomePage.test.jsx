import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HomePage from './index';


describe('HomePage', () => {
  it('renders correctly', () => {
    render(<HomePage />);

      
        expect(screen.getByRole('heading', { name: /home/i })).toBeInTheDocument();

   
        expect(screen.getByRole('link', { name: /learn and take notes/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /go to quiz/i })).toBeInTheDocument();

        expect(screen.getByRole('link', { name: /learn and take notes/i })).toHaveAttribute('href', '/learn');
        expect(screen.getByRole('link', { name: /go to quiz/i })).toHaveAttribute('href', '/test');
    });
});
