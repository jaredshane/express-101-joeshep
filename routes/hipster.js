'use strict';

const { Router } = require('express')
const path = require('path')

const hipsterRouter = Router()

hipsterRouter.use('/whatever', (req, res, next) => {
  console.log('Oh. You need a little dummy text for your mockup? How quaint.')
  res.sendFile(path.join(__dirname, '../public', 'hipster.html'))
})

hipsterRouter.use('/bootstrap', (req, res, next) => {
  res.send('I bet you’re still using Bootstrap too…')
})

module.exports = hipsterRouter
