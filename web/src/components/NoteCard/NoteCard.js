import NoteCardBase from '../../components/NoteCardBase'
import './NoteCard.css'

export const NoteCard = ({ item }) => {
  return (
    <NoteCardBase>
      <p className="note-card__title">{item?.title}</p>
      <p className="note-card__text">{item?.text}</p>
    </NoteCardBase>
  )
}
