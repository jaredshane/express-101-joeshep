const { Router } = require('express')
const path = require('path')
const { newPage, submit } = require('../controllers/animalCtrl')
const animalRouter = Router()


// Applying middleware to all routes in the router
// animalRouter.use(function (req, res, next) {
//   if (req.user === 'farmer') {
//     next()
//   } else {
//     res.status(403).send('Forbidden')
//   }
// })

animalRouter.get('/monkeys', (req, res, next) => {
  console.log('Monkeysssss')
  console.log(`This ran at ${req.requestedTime}`)
  // res.sendFile(path.join(__dirname, '../public', 'monkeys.html'))
  animal.new(req, res)

})

animalRouter.get('/chickens', newPage)

animalRouter.post('/chickens', submit)

module.exports = animalRouter
