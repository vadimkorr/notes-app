const express = require('express')
const router = express.Router()
const quotesService = require('../services/quotes')

// get random quote
router.get('/', (req, res) => {
  const data = quotesService.getRandomQuote()
  res.json(data)
})

module.exports = router
