import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { getInfo, getNotes } from '../../services/notes'
import Quote from '../../components/Quote'
import NotesList from '../../components/NotesList'
import './Notes.css'
import { useNotes } from '../../notes-data'

export const Notes = () => {
  const history = useHistory()
  const { notes } = useNotes()

  const handleAddClick = () => {
    history.push('/notes/new')
  }
  const handleEditClick = (noteId) => {
    history.push(`/notes/${noteId}`)
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
