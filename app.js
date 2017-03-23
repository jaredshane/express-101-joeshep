'use strict';

const express = require('express')
const app = express()

const requestTime = (req, res, next)  => {
  req.requestedTime = Date.now();
  next()
}


app.use(express.static(__dirname + '/public'))

app.use(requestTime)


app.get('/monkeys', (req, res, next) => {
  console.log('Monkeysssss')
  console.log(`This ran at ${req.requestedTime}`)
  res.sendFile(__dirname + '/public/monkeys.html')
})

app.get('/chickens', (req, res, next) => {
  console.log('Look at all these chickens')
  res.send('<h3>No chickens for you</h3><form method="POST"><input type="text"><button type="submit">push</button></form>')
})

app.post('/chickens', (req, res, next) => {
  console.log('Posting a form for chickens')
  console.log(req)

})

app.use( (req, res) => {
  res.send('Where do you think you\'re going, we only have chickens and monkeys here')
})

app.listen(3005, () => {
  console.log('I\'ll be right by your side til 3005')
})
