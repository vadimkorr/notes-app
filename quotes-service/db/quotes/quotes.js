const quotes = require('./quotes.json')

const getRandomQuote = () => quotes[Math.floor(Math.random() * quotes.length)]

const getQuote = (id) => quotes.find((quote) => quote.id === id) || null

module.exports = {
  getRandomQuote,
  getQuote,
}
