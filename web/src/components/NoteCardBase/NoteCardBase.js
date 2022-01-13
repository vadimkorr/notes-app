import './NoteCardBase.css'
import { Flipped } from 'react-flip-toolkit'

export const NoteCardBase = ({ children }) => {
  return <div className="note-card-base__main-container">{children}</div>
}
