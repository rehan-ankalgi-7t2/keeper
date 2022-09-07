import React from 'react'
import '../styles/note.css'

const NoteCard = ({ note, onDelete, id }) => {
    
    const handleClick = () => {
        onDelete(id)
    }

  return (
    <div className='note-card' key={note.id}>
        <h1>{note.title}</h1>
        <p>{note.content}</p>
        <button onClick={handleClick}>delete</button>
    </div>
  )
}

export default NoteCard