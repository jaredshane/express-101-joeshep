const { Router, express } = require('express')
const router = Router()
const path = require('path')

// router.get('/', (req, res, next) => {
//   console.log('hold up')
//   res.sendFile(path.join(__dirname, "../public", 'index.html'))
// })
router.use(require('./games'))
router.use(require('./hipster'))
router.use(require('./animals'))

module.exports = router
