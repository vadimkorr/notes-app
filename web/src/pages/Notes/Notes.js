import { useEffect, useState } from 'react'
import { getInfo, getNotes } from '../../services/notes'
import Quote from '../../components/Quote'
import NotesList from '../../components/NotesList'
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
      <div className="notes__notes-list-container">
        <NotesList items={notes} />
      </div>

      <div className="notes__quotes-container">
        <Quote />
      </div>
    </div>
  )
}
