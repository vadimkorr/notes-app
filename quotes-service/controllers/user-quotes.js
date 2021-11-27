const express = require('express')
const router = express.Router()
const userQuotesService = require('../services/user-quotes')

// get user quote
router.get('/:id', (req, res) => {
  const userId = req.headers.user_id
  const quoteId = req.params.id
  const data = userQuotesService.getUserQuote(userId, quoteId)
  res.json(data)
})

// get favorite quotes
router.get('/', (req, res) => {
  const userId = req.headers.user_id
  const data = userQuotesService.getFavoriteQuotes(userId)
  res.json(data)
})

// add quote favorite status
router.post('/', (req, res) => {
  const userId = req.headers.user_id
  const quoteId = req.body.quote_id
  const favorite = req.body.favorite
  const result = userQuotesService.addQuoteToFavorite(userId, quoteId, favorite)
  res.json({
    result,
  })
})

module.exports = router
