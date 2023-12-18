import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';

import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import HomePage from './HomePage'; // Adjust the import path as needed

describe('HomePage', () => {
    it('renders correctly', () => {
        render(
            <Router>
                <HomePage />
            </Router>
        );

        // Check if the main heading is rendered
        expect(screen.getByRole('heading', { name: /home/i })).toBeInTheDocument();

        // Check if the links are rendered
        expect(screen.getByRole('link', { name: /learn and take notes/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /go to quiz/i })).toBeInTheDocument();

        // Check if the links have correct href
        expect(screen.getByRole('link', { name: /learn and take notes/i })).toHaveAttribute('href', '/learn');
        expect(screen.getByRole('link', { name: /go to quiz/i })).toHaveAttribute('href', '/test');
    });
});

