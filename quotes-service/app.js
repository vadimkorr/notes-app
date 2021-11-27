const express = require('express')
const http = require('http')
const app = express()

const port = process.env.PORT || 3100

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  )
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With,content-type,Authorization'
  )
  res.setHeader('Access-Control-Allow-Credentials', true)

  next()
})

require('./startup/routes')(app)

const server = http.createServer(app)
server.listen(port, () => {
  console.info(`Server listening on port ${port}`)
})
