import NoteCard from '../../components/NoteCard'
import NoteCardAdd from '../../components/NoteCardAdd'
import { Flipped } from 'react-flip-toolkit'

import './NotesList.css'

export const NotesList = ({ items, onAddClick, onEditClick }) => {
  const handleAddClick = () => {
    onAddClick?.()
  }

  const handleEditClick = (id) => {
    onEditClick?.(id)
  }

  return (
    <div className="notes-list__main-container">
      <NoteCardAdd onClick={handleAddClick} />
      {items.map((note) => (
        <Flipped flipId={`note-card-${note?.id}`}>
          <div
            key={note.id}
            className="notes-list__note-card-container"
            onClick={() => handleEditClick(note.id)}
          >
            <NoteCard item={{ ...note, ...note.doc }} />
          </div>
        </Flipped>
      ))}
    </div>
  )
}
