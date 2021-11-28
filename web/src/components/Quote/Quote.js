import FavoriteButton from '../../components/FavoriteButton'
import NextButton from '../../components/NextButton'
import './Quote.css'

export const Quote = ({ quote, favorite, onFavorite, onNext }) => {
  const handleFavoriteClick = (favorite) => {
    onFavorite?.(favorite)
  }

  const handleNextQuote = () => {
    onNext?.()
  }

  return (
    <div className="quote__main-container">
      <div className="quote__quote-container">
        <p className="quote__text">{quote?.text || ''}</p>
        <p className="quote__author">{quote?.author || ''}</p>
      </div>
      <div className="quote__controls-container">
        <FavoriteButton favorite={favorite} onClick={handleFavoriteClick} />
        <NextButton onClick={handleNextQuote} />
      </div>
    </div>
  )
}
