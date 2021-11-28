import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import NoteForm from '../../components/NoteForm'
import { getNote, updateNote } from '../../services/notes'

import './NoteEdit.css'

export const NoteEdit = () => {
  const [note, setNote] = useState()
  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    getNote({ id: params.noteId }).then((data) => {
      setNote(data)
    })
  }, [params.noteId])

  const handleSaveClick = ({ title, text }) => {
    updateNote({ note, title, text }).then(() => {
      navigate('/notes')
    })
  }

  return <NoteForm note={note} onSaveClick={handleSaveClick} />
}
