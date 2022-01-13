import { Flipped } from 'react-flip-toolkit'
import NoteCardBase from '../../components/NoteCardBase'
import './NoteCard.css'

export const NoteCard = ({ item }) => {
  return (
    <NoteCardBase>
      <Flipped flipId={`note-card__title-${item?.id}`}>
        <p className="note-card__title">{item?.title}</p>
      </Flipped>
      <Flipped scale={false} flipId={`note-card__text-${item?.id}`}>
        <p className="note-card__text">{item?.text}</p>
      </Flipped>
    </NoteCardBase>
  )
}
