import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const NoteForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [subject, setSubject] = useState('');
  const navigateTo = useNavigate();

  const createNote = async ({ title, content }) => {
    try {
      const options = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('token')
        },
        body: JSON.stringify({
          title: title,
          content: content
        })
      };

      const response = await fetch(
        'https://quizwiz-api.onrender.com/notes',
        options
      );

      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });

      if (response.status === 201) {
        Toast.fire({
          icon: 'success',
          title: 'Created note successfully'
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `Failed to create notes: ${error.message}`
      });
    }
  };

  const createSubject = async (subject) => {
    try {
      const options = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('token')
        },
        body: JSON.stringify(subject)
      };

      const response = await fetch(
        'https://quizwiz-api.onrender.com/subjects',
        options
      );

      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });

      if (response.status === 201) {
        Toast.fire({
          icon: 'success',
          title: 'Created subject successfully'
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `Failed to create subject: ${error.message}`
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await createSubject({ name: subject });

    await createNote({
      title: title,
      content: content
    });

    navigateTo('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='note-form-container'>
        <div className='title'>
          <label htmlFor='title' className='form-label'>
            <textarea
              id='title'
              name='title'
              required
              placeholder='Title'
              className='form-control'
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </label>
        </div>

        <div className='subject'>
          <label htmlFor='subject' className='form-label'>
            <textarea
              required
              id='subject'
              name='subject'
              placeholder='Subject'
              className='form-control'
              onChange={(e) => setSubject(e.target.value)}
              value={subject}
            />
          </label>
        </div>

        <div className='content'>
          <label htmlFor='content' className='form-label'>
            <textarea
              required
              id='content'
              name='content'
              placeholder='Write your notes here...'
              className='form-control'
              onChange={(e) => setContent(e.target.value)}
              value={content}
            />
          </label>
        </div>
        <div>
          <button type='submit' className='save-button'>
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default NoteForm;
