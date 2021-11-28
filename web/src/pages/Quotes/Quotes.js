import { useEffect, useState } from 'react'
import QuotesList from '../../components/QuotesList'
import { getUserQuotes } from '../../services/quotes'
import './Quotes.css'

const USER_ID = '1'

export const Quotes = () => {
  const [userQuotes, setUserQuotes] = useState([])

  useEffect(() => {
    getUserQuotes(USER_ID).then((quotes) => setUserQuotes(quotes))
  }, [])

  return (
    <div className="quotes__main-container">
      <QuotesList items={userQuotes} />
    </div>
  )
}
