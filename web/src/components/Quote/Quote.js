import ButtonFavorite from '../../components/ButtonFavorite'
import ButtonNext from '../../components/ButtonNext'
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
        <ButtonFavorite favorite={favorite} onClick={handleFavoriteClick} />
        <ButtonNext onClick={handleNextQuote} />
      </div>
    </div>
  )
}
