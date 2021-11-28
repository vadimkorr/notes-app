import NoteCard from '../../components/NoteCard'

import './NotesList.css'

export const NotesList = ({ items }) => {
  return (
    <div className="notes-list__main-container">
      {items.map((note) => (
        <div key={note.id} className="notes-list__note-card-container">
          <NoteCard item={note.doc} />
        </div>
      ))}
    </div>
  )
}
