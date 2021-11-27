const quotes = require('../../db/quotes')

const userQuotes = {} // { [userId]: [ quoteId ] }

const getIsQuoteFavorite = (userId, quoteId) =>
  Boolean(userQuotes[userId]?.find((_quoteId) => _quoteId === quoteId))

const _setQuoteNotFavorite = (userId, quoteId) => {
  if (!getIsQuoteFavorite(userId, quoteId)) return
  userQuotes[userId] = userQuotes[userId].filter(
    (_quoteId) => _quoteId !== quoteId
  )
}

const _setQuoteFavorite = (userId, quoteId) => {
  if (getIsQuoteFavorite(userId, quoteId)) return
  userQuotes[userId].push(quoteId)
}

const addQuoteToFavorite = (userId, quoteId, favorite) => {
  if (!quotes.getQuote(quoteId)) return false
  if (!userQuotes[userId]) userQuotes[userId] = []

  if (favorite) {
    _setQuoteFavorite(userId, quoteId)
  } else {
    _setQuoteNotFavorite(userId, quoteId)
  }
  return true
}

const getFavoriteQuotes = (userId) =>
  (userQuotes[userId] || [])
    .filter((quoteId) => getIsQuoteFavorite(userId, quoteId))
    .map((quoteId) => ({
      ...quotes.getQuote(quoteId),
    }))

module.exports = {
  getIsQuoteFavorite,
  addQuoteToFavorite,
  getFavoriteQuotes,
}
