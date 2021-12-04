import { FaStar, FaRegStar } from 'react-icons/fa'
import './ButtonFavorite.css'

export const ButtonFavorite = ({ favorite, onClick }) => {
  const handleClick = () => {
    onClick(!favorite)
  }

  const Component = favorite ? FaStar : FaRegStar
  return <Component className="button-favorite__icon" onClick={handleClick} />
}
