const bodyParser = require('body-parser')
const quotesController = require('../controllers/quotes')
const userQuotesController = require('../controllers/user-quotes')

module.exports = (app) => {
  app.use(bodyParser.json())
  app.use('/api/v1/quotes', quotesController)
  app.use('/api/v1/user-quotes', userQuotesController)
}
