'use strict';

const { Router } = require('express')
const path = require('path')

const gameRouter = Router()

gameRouter.get('/videogames', (req, res, next) => {
  console.log('Gettin\' RDR')
  res.sendFile(path.join(__dirname, '../public', 'videogames.html'))
})

gameRouter.get('/mobilegames', (req, res, next) => {
  console.log('Its\'a me, Mario!')
  res.send('<h3>Super Mario Run!</h3><form method="POST"><input type="text"><button type="submit">Do not push</button></input></form>')
})

gameRouter.post('/mobilegames', (req, res, next) => {
  console.log('Why did you push the button? I told you not to. Oh well, I\'ll submit the form.')
})


module.exports = gameRouter
