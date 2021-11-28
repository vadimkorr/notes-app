import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { getInfo, getNotes } from '../../services/notes'
import Quote from '../../components/Quote'
import NotesList from '../../components/NotesList'
import './Notes.css'

export const Notes = () => {
  const navigate = useNavigate()
  const [notes, setNotes] = useState([])

  useEffect(() => {
    getInfo()
    // putNote({ title: 'new note', text: 'hello' })
    getNotes().then((values) => {
      setNotes(values)
    })
  }, [])

  const handleAddClick = () => {
    navigate('/notes/new')
  }
  const handleEditClick = (noteId) => {
    navigate(`/notes/${noteId}`)
  }

  return (
    <div className="notes__main-container">
      <div className="notes__notes-list-container">
        <NotesList
          items={notes}
          onAddClick={handleAddClick}
          onEditClick={handleEditClick}
        />
      </div>

      <div className="notes__quotes-container">
        <Quote />
      </div>
    </div>
  )
}
