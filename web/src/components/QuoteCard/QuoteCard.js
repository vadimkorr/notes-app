import ButtonRemove from '../../components/ButtonRemove'
import './QuoteCard.css'

export const QuoteCard = ({ item, onRemoveClick }) => {
  const handleRemoveClick = () => {
    onRemoveClick?.()
  }

  return (
    <div className="quote-card__main-container">
      <div className="quote-card__quote-container">
        <p className="quote-card__text">{item?.text || ''}</p>
        <p className="quote-card__author">{item?.author || ''}</p>
      </div>
      <div className="quote-card__controls-container">
        <ButtonRemove onClick={handleRemoveClick} />
      </div>
    </div>
  )
}
