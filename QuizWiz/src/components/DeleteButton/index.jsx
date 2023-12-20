import React from 'react'

const DeleteButton = ({deleteNotes, id }) => {
  return (
    <button className="delete-button" onClick={() => deleteNotes(id)}>
              &#x2715;
            </button>
  )
}

export default DeleteButton