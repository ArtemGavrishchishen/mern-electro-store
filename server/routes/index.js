const { Router } = require('express')

const usersRoutes = require('./users.routes')
const technicsRoutes = require('./technics.routes')

const router = Router()

router.get('/', (req, res) => {
  res.status(200).json({ message: 'The server was started' })
})

router.use('/users', usersRoutes)
router.use('/technics', technicsRoutes)

module.exports = router
