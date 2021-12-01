const quotes = require('../db/quotes')
const userQuotes = require('../db/userQuotes')

const getUserQuote = (userId, quoteId) => {
  const quote = quotes.getQuote(quoteId)
  if (!quote) return null

  const isQuoteFavorite = userQuotes.getIsQuoteFavorite(userId, quoteId)
  return {
    ...quote,
    favorite: isQuoteFavorite,
  }
}

const addQuoteToFavorite = (userId, quoteId, favorite) =>
  userQuotes.addQuoteToFavorite(userId, quoteId, favorite)

const getFavoriteQuotes = (userId) =>
  userQuotes.getFavoriteQuotes(userId).map((quote) => ({
    ...quote,
    favorite: true,
  }))

module.exports = {
  getUserQuote,
  addQuoteToFavorite,
  getFavoriteQuotes,
}
