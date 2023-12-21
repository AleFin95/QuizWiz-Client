import * as matchers from '@testing-library/jest-dom/matchers';
import { render, screen, fireEvent, cleanup, } from '@testing-library/react';
import { describe, expect, it, beforeEach } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import PageWrapper from './index';
import { AuthProvider } from '../../contexts'; // Assuming you have an AuthProvider for context

expect.extend(matchers);

describe('PageWrapper', () => {
    beforeEach(() => {
        cleanup();
    });

        // Renders a div with class 'page-wrapper'
    it('should render a div with class \'page-wrapper\' when PageWrapper is rendered', () => {
        render(
            <MemoryRouter>
              <AuthProvider>
                <PageWrapper />
              </AuthProvider>
            </MemoryRouter>
          );
        const divElement = screen.getByTestId('page-wrapper');
        expect(divElement).toBeInTheDocument();
        expect(divElement).toHaveClass('page-wrapper');
    });

      // Renders a header with class 'sticky-header'
    it('should render a header with class \'sticky-header\' when PageWrapper is rendered', () => {
        render(
        <MemoryRouter>
            <AuthProvider>
            <PageWrapper />
            </AuthProvider>
        </MemoryRouter>
        );
        const headerElement = screen.getByTestId('sticky-header');
        expect(headerElement).toBeInTheDocument();
        expect(headerElement).toHaveClass('sticky-header');
    });
});
