import React, { useState } from 'react'
import '../styles/addnote.css'

const AddNote = (props) => {

    const [note, setnote] = useState({
        title: "",
        content: ""
      })
    
      const handleSubmit = (e) => {
        e.preventDefault()
        props.onAdd(note)
        e.target.reset()
      }
    
      const handleChange = (e) => {
        const {name, value} = e.target
        setnote(prevnote => {
          return {
            ...prevnote,
            [name]: value
          }
        })
      }

  return (
    <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name='title' 
            value={note.title} 
            placeholder='Note title'
            onChange={handleChange}
          />
          <textarea 
            type="text" 
            name='content' 
            rows={3} 
            cols={10} 
            value={note.content} 
            placeholder='Content of the note...'
            onChange={handleChange}
            ></textarea>
          <button type='submit'>+</button>
        </form>
  )
}

export default AddNote