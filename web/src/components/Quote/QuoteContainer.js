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
      .catch((e) => {
        console.error(e)
      })

    if (!_quote) return
    const userQuote = await getUserQuote(USER_ID, _quote.id)
    setQuote({
      ..._quote,
      favorite: userQuote.favorite,
    })
  }

  useEffect(() => {
    fetchQuote()
  }, [])

  const handleFavorite = (favorite) => {
    const _quote = {
      ...quote,
      favorite,
    }
    setQuote(_quote)
    setFavoriteQuote(USER_ID, _quote.id, _quote.favorite, _quote)
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
