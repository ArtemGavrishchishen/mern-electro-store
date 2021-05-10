const { Router } = require('express')

const UserController = require('../controllers/users.controller')
const auth = require('../middleware/auth.middleware')

const router = Router()
router
  .route('/')
  .get(auth, UserController.getUsers)
  .put(auth, UserController.updateUser)
  .delete(auth, UserController.deleteUser)

router.route('/:userId').get(auth, UserController.getUserById)

module.exports = router
