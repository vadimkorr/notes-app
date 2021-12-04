import { FaAngleRight } from 'react-icons/fa'
import './ButtonNext.css'

export const ButtonNext = ({ onClick }) => {
  const handleClick = () => {
    onClick()
  }

  return <FaAngleRight className="button-next__icon" onClick={handleClick} />
}
