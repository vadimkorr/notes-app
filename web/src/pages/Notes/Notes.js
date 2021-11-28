import { useEffect, useState } from 'react'
import { getInfo, getNotes } from '../../services/notes'
import Quote from '../../components/Quote'
import './Notes.css'

export const Notes = () => {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    getInfo()
    // putNote({ title: 'new note', text: 'hello' })
    getNotes().then((values) => {
      setNotes(values)
    })
  }, [])

  return (
    <div className="notes__main-container">
      <ul className="notes__notes-container">
        {notes.map((note) => {
          return (
            <li key={note.id}>
              {note.doc.title} : {note.doc.text}
            </li>
          )
        })}
      </ul>
      <div className="notes__quotes-container">
        <Quote />
      </div>
    </div>
  )
}
