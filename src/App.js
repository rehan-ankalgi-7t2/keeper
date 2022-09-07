import React, { useState } from 'react'
import AddNote from './components/AddNote'
import Footer from './components/Footer'
import Header from './components/Header'
import NoteCard from './components/NoteCard'
import './styles/App.css'

const App = () => {

  const [notes, setnotes] = useState([])

  const addNote = (newNote) => {
    setnotes(prevNotes => {
      return [...prevNotes, newNote]
    })
  }

  const deleteNote = (id) => {
    setnotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id
      })
    })
  }

  return (
    <div>
      <Header/>
      <div className='container'>
        {notes.map((note, index) => (
          <NoteCard key={index} id={index} note={note} onDelete={deleteNote}/>
        ))}
        <AddNote onAdd={addNote}/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
