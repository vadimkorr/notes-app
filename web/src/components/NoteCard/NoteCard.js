import { Flipped } from 'react-flip-toolkit'
import NoteCardBase from '../../components/NoteCardBase'
import './NoteCard.css'

export const NoteCard = ({ item }) => {
  return (
    <Flipped flipId={`note-card-${item?.id}`}>
      <NoteCardBase>
        <Flipped flipId={`note-card__title-${item?.id}`}>
          <p className="note-card__title">{item?.title}</p>
        </Flipped>
        <Flipped flipId={`note-card__text-${item?.id}`}>
          <p className="note-card__text">{item?.text}</p>
        </Flipped>
      </NoteCardBase>
    </Flipped>
  )
}
