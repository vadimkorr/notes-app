import { FaStar, FaRegStar } from 'react-icons/fa'
import './FavoriteButton.css'

export const FavoriteButton = ({ favorite, onClick }) => {
  const handleClick = () => {
    onClick(!favorite)
  }

  const Component = favorite ? FaStar : FaRegStar
  return <Component className="favorite-button__icon" onClick={handleClick} />
}
