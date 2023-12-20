import React, { useEffect, useState } from 'react';
import './NoteForm.css'; // Ensure this points to the correct path of your CSS file

function NoteForm({ note = '' }) {
  useEffect(() => {
    if (note) {
      setFormData({
        title: note.title,
        content: note.content,
        subject: note.subject
      });
    }
  }, [note]);

  const initialFormState = {
    title: '',
    content: '',
    subject: ''
  };

  const [formData, setFormData] = useState(initialFormState);

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // ... rest of the submit logic
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='title' className='form-label'>
            Title
            <textarea
              id='title'
              name='title'
              className='form-control'
              onChange={handleChange}
              value={formData.title}
            />
          </label>
        </div>
        <div className='form-group'>
          <label htmlFor='content' className='form-label'>
            Content
            <textarea
              id='content'
              name='content'
              className='form-control'
              onChange={handleChange}
              value={formData.content}
            />
          </label>
        </div>
        <div className='form-group'>
          <label htmlFor='subject' className='form-label'>
            Subject
            <textarea
              id='subject'
              name='subject'
              className='form-control'
              onChange={handleChange}
              value={formData.subject}
            />
          </label>
        </div>
        <div>
          <button type='submit' className='btn btn-primary mr-2'>
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default NoteForm;
