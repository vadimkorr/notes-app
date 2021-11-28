import QuoteCard from '../../components/QuoteCard'
import './QuotesList.css'

export const QuotesList = ({ items, onRemoveClick }) => {
  const handleRemoveClick = (quoteId) => {
    onRemoveClick(quoteId)
  }

  return (
    <div className="quotes-list__main-container">
      {items.map((item) => (
        <QuoteCard
          key={item.id}
          item={item}
          onRemoveClick={() => handleRemoveClick(item.id)}
        />
      ))}
    </div>
  )
}
