import { useEffect, useState } from 'react'
import { QuotesList } from './QuotesList'
import { getUserQuotes, setFavoriteQuote } from '../../services/quotes'
import './QuotesList.css'

const USER_ID = '1'

export const QuotesListContainer = () => {
  const [userQuotes, setUserQuotes] = useState([])

  useEffect(() => {
    getUserQuotes(USER_ID)
      .then((quotes) => setUserQuotes(quotes))
      .catch((e) => {
        console.error(e)
      })
  }, [])

  const handleRemoveClick = (quoteId) => {
    setUserQuotes((quotes) => quotes.filter((quote) => quote.id !== quoteId))
    setFavoriteQuote(USER_ID, quoteId, false)
  }
  return <QuotesList items={userQuotes} onRemoveClick={handleRemoveClick} />
}
