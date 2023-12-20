import * as matchers from '@testing-library/jest-dom/matchers';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import AddNotesPage from '.';
import { AuthProvider } from '../../contexts';

expect.extend(matchers);
describe('AddNotesPage Component', () => {
  render(
      <MemoryRouter>
         <AuthProvider>
        <AddNotesPage />
        </AuthProvider>
      </MemoryRouter>
    );
  it('displays "Add Note" heading', () => {
    expect(screen.getByRole('heading', { name: /add note/i })).toBeInTheDocument();
  });

});
