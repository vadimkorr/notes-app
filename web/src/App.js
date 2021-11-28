import React, { useEffect, useState } from 'react'
import './App.css'
import { getInfo, getNotes } from './services/notes'
import Quote from './components/Quote'

function App() {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    getInfo()
    // putNote({ title: 'new note', text: 'hello' })
    getNotes().then((values) => {
      setNotes(values)
    })
  }, [])

  return (
    <div className="app__main-container">
      <ul className="app__notes-container">
        {notes.map((note) => {
          return (
            <li key={note.id}>
              {note.doc.title} : {note.doc.text}
            </li>
          )
        })}
      </ul>
      <div className="app__quotes-container">
        <Quote />
      </div>
    </div>
  )
}

export default App
