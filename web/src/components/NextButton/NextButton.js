import { FaAngleRight } from 'react-icons/fa'
import './NextButton.css'

export const NextButton = ({ onClick }) => {
  const handleClick = () => {
    onClick()
  }

  return <FaAngleRight className="next-button__icon" onClick={handleClick} />
}
