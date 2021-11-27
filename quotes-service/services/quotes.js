const quotes = require('../db/quotes')

const getRandomQuote = () => quotes.getRandomQuote()

module.exports = {
  getRandomQuote,
}
