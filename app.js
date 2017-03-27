'use strict';

require('dotenv').config()
const express = require('express')
const app = express()

//routes modules
//defaults to looking for index.js
const routes = require('./routes/')

const requestTime = (req, res, next)  => {
  req.requestedTime = Date.now()
  next()
}


app.use(express.static(__dirname + '/public'))

app.use(requestTime)

app.use(routes)


app.use( (req, res) => {
  res.send('Where do you think you\'re going, we only have chickens and monkeys here')
})

const port = process.env.PORT || 8081
app.listen(port, () => {
  console.log(`I\'ll be right by your side til ${port}`)
})
