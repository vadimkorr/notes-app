import { useEffect, useState } from 'react'
import { Quote } from './Quote'
import {
  getRandomQuote,
  getUserQuote,
  setFavoriteQuote,
} from '../../services/quotes'

const USER_ID = '1'

export const QuoteContainer = () => {
  const [quote, setQuote] = useState()

  const fetchQuote = async () => {
    const _quote = await getRandomQuote()
    const userQuote = await getUserQuote(USER_ID, _quote.id)
    setQuote({
      ..._quote,
      favorite: userQuote.favorite
    })
  }

  useEffect(() => {
    fetchQuote()
  }, [])

  const handleFavorite = (favorite) => {
    setQuote((_quote) => ({ ..._quote, favorite }))
    setFavoriteQuote(USER_ID, quote.id, favorite)
  }
  const handleNext = () => {
    fetchQuote()
  }

  return (
    <Quote
      quote={quote}
      favorite={quote?.favorite}
      onFavorite={handleFavorite}
      onNext={handleNext}
    />
  )
}
