import { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import NoteForm from '../../components/NoteForm'
import { getNote, updateNote } from '../../services/notes'
import { Flipped } from 'react-flip-toolkit'

import './NoteEdit.css'

export const NoteEdit = ({ match }) => {
  const { params: { noteId } = {} } = match

  const [note, setNote] = useState({ id: noteId })
  const params = useParams()
  const history = useHistory()

  useEffect(() => {
    setNote({ id: params.noteId })
    getNote({ id: params.noteId }).then((data) => {
      setNote(data)
    })
  }, [params.noteId])

  const handleSaveClick = ({ title, text }) => {
    updateNote({ note, title, text }).then(() => {
      history.push('/notes')
    })
  }

  return <NoteForm note={note} onSaveClick={handleSaveClick} />
}
