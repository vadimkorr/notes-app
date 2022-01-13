import { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import NoteForm from '../../components/NoteForm'
import { getNote, updateNote } from '../../services/notes'

import './NoteEdit.css'

export const NoteEdit = ({ match }) => {
  const { params: { noteId } = {} } = match

  const [note, setNote] = useState({ id: noteId })
  const params = useParams()
  const history = useHistory()

  useEffect(() => {
    const noteId = params.noteId
    setNote({ id: noteId })
    getNote({ id: noteId }).then((data) => {
      setNote({ ...data, id: noteId })
    })
  }, [params.noteId])

  const handleSaveClick = ({ title, text }) => {
    updateNote({ note, title, text }).then(() => {
      history.push('/notes')
    })
  }

  return <NoteForm note={note} onSaveClick={handleSaveClick} />
}
