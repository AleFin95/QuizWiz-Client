import * as matchers from '@testing-library/jest-dom/matchers';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import AddNotesPage from '.';
import { AuthProvider } from '../../contexts';

expect.extend(matchers);
describe('AddNotesPage Component', () => {
  it('displays "Countdown Timer:" paragraph', () => {
    render(
      <MemoryRouter>
        <AuthProvider>
          <AddNotesPage />
        </AuthProvider>
      </MemoryRouter>
    );

    expect(screen.getByText(/Countdown Timer:/i)).toBeInTheDocument();
  });
});
