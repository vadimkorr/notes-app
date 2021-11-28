import './NoteCard.css'

export const NoteCard = ({ item }) => {
  return (
    <div className="note-card__main-container">
      <p className="note-card__title">{item?.title}</p>
      <p className="note-card__text">{item?.text}</p>
    </div>
  )
}
