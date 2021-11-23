import React, { useEffect, useState } from 'react'
import './App.css'
import { getInfo, getNotes } from './services/notes'

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
    <div className="App">
      <ul>
        {notes.map((note) => {
          return (
            <li key={note.id}>
              {note.doc.title} : {note.doc.text}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default App
