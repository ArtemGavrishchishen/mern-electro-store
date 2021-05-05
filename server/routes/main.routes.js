const { Router } = require('express')

const router = Router()

router.get('/', async (req, res) => {
  console.log('test')
  res.status(200).json({ message: 'Server was started' })
})

module.exports = router
