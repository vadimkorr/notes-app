import { useEffect, useState } from 'react'
import './NoteForm.css'

export const NoteForm = ({ note, onSaveClick }) => {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')

  useEffect(() => {
    setTitle(note?.title || '')
    setText(note?.text || '')
  }, [note])

  const handleTitleChange = (event) => {
    setTitle(event.target.value)
  }
  const handleTextChange = (event) => {
    setText(event.target.value)
  }
  const handleSaveClick = () => {
    onSaveClick?.({ title, text })
  }

  return (
    <div className="note-form__main-container">
      <input
        type="text"
        className="note-form__title-input"
        onChange={handleTitleChange}
        placeholder="Title"
        value={title}
      />
      <textarea
        className="note-form__text"
        onChange={handleTextChange}
        placeholder="Put your note here"
        value={text}
      ></textarea>
      <button
        className="note-form__save-button"
        type="button"
        onClick={handleSaveClick}
      >
        Save
      </button>
    </div>
  )
}
