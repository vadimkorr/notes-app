import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import anime from 'animejs'

import { Flipped } from 'react-flip-toolkit'
import './NoteForm.css'

export const NoteForm = ({ note, onSaveClick }) => {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')

  const elementRef = useRef(null)

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

  const onExit = (el) => {
    return anime({
      targets: [...el.querySelectorAll('[data-fade-in]')],
      opacity: 0,
      easing: 'easeOutSine',
      duration: 350,
      delay: anime.stagger(20),
    }).finished
  }

  return (
    <Flipped flipId={`note-card-${note?.id}`}>
      <div className="note-form__main-container" ref={elementRef}>
        <Link
          data-fade-in
          to={{
            pathname: '/notes',
            state: {
              animate: () => onExit(elementRef.current),
            },
          }}
        >
          Back
        </Link>

        <Flipped flipId={`note-card__title-${note?.id}`}>
          <input
            type="text"
            className="note-form__title-input"
            onChange={handleTitleChange}
            placeholder="Title"
            value={title}
          />
        </Flipped>
        <Flipped flipId={`note-card__text-${note?.id}`}>
          <textarea
            className="note-form__text"
            onChange={handleTextChange}
            placeholder="Put your note here"
            value={text}
          ></textarea>
        </Flipped>
        <button
          data-fade-in
          className="note-form__save-button"
          type="button"
          onClick={handleSaveClick}
        >
          Save
        </button>
      </div>
    </Flipped>
  )
}
