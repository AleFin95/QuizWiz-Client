import * as matchers from '@testing-library/jest-dom/matchers';
import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import { describe, expect, it, beforeEach, afterEach } from 'vitest';
import { MemoryRouter } from 'react-router-dom'; 
import NoteForm from '.';


expect.extend(matchers);

describe('NoteForm Component', () => {
it('renders the form correctly', () => {
    render(<MemoryRouter>
        <NoteForm/>
        </MemoryRouter>
    );

    expect(screen.getByPlaceholderText('Title')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Subject')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Write your notes here...')).toBeInTheDocument();
    expect(screen.getByText('Save')).toBeInTheDocument();
  });

  it('submits the form', async () => {

    const createSubjectMock = async () => {};
    const createNoteMock = async () => {};

    NoteForm.createSubject = createSubjectMock;
    NoteForm.createNote = createNoteMock;

    fireEvent.change(screen.getByPlaceholderText('Title'), { target: { value: 'Test Title' } });
    fireEvent.change(screen.getByPlaceholderText('Subject'), { target: { value: 'Test Subject' } });
    fireEvent.change(screen.getByPlaceholderText('Write your notes here...'), { target: { value: 'Test Content' } });

    fireEvent.click(screen.getByText('Save'));


    NoteForm.createSubject = undefined;
    NoteForm.createNote = undefined;
  });
});