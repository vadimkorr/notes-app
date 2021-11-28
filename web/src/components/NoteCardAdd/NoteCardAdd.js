import { FaPlus } from 'react-icons/fa'
import NoteCardBase from '../../components/NoteCardBase'
import './NoteCardAdd.css'

export const NoteCardAdd = ({ onClick }) => {
  const handleClick = () => {
    onClick?.()
  }
  return (
    <NoteCardBase>
      <div className="note-card-add__button-container">
        <FaPlus
          onClick={handleClick}
          size="36px"
          className="note-card-add__button"
        />
      </div>
    </NoteCardBase>
  )
}
