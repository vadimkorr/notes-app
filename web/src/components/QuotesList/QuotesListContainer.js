import { QuotesList } from './QuotesList'
import { setFavoriteQuote } from '../../services/quotes'
import './QuotesList.css'

const USER_ID = '1'

export const QuotesListContainer = ({ items }) => {
  const handleRemoveClick = (quoteId) => {
    setFavoriteQuote(USER_ID, quoteId, false)
  }
  return <QuotesList items={items} onRemoveClick={handleRemoveClick} />
}
