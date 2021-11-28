import { FaTrashAlt } from 'react-icons/fa'
import './ButtonRemove.css'

export const ButtonRemove = ({ onClick }) => {
  const handleClick = () => {
    onClick()
  }

  return <FaTrashAlt className="button-remove__icon" onClick={handleClick} />
}
