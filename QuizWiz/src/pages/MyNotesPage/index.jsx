import React, { useEffect, useState } from 'react';
import { DeleteButton } from '../../components';

const MyNotesPage = () => {
  const [notes, setNotes] = useState([]);

  async function deleteNotes(id) {
    const options = {
      headers: {
        Authorization: localStorage.getItem('token')
      },
      method: 'DELETE'
    };

    await fetch(`https://quizwiz-api.onrender.com/notes/${id}`, options);
    const updatedNotes = notes.filter((n) => n._id !== id);
    setNotes(updatedNotes);
  }

  useEffect(() => {
    async function loadNotes() {
      try {
        const response = await fetch('https://quizwiz-api.onrender.com/notes');
        const data = await response.json();
        setNotes(data);
      } catch (error) {
        console.error('Error loading notes:', error);
      }
    }

    loadNotes();
  }, [notes]);

  function displayNotes() {
    if (!notes || !notes.data || !Array.isArray(notes.data)) {
      return null;
    }

    return notes.data.map((n) => (
      <div key={n._id} className='note-container'>
        <div className='note-header'>
          <h3>{n.title}</h3>
          <DeleteButton key={n._id} id={n._id} deleteNotes={deleteNotes} />
        </div>
        <div className='note-content'>
          <p>{n.content}</p>
        </div>
      </div>
    ));
  }

  return (
    <div className='myNotesPage'>
      <h1>myNotesPage</h1>
      <div className='container'>
      <h2>{displayNotes()}</h2>
      </div>
    </div>
  );
};

export default MyNotesPage;
