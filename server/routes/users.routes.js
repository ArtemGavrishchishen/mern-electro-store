const { Router } = require('express')

const UserController = require('../controllers/users.controller')
const auth = require('../middleware/auth.middleware')

const router = Router()
router
  .route('/')
  .get(auth, UserController.getUser)
  .put(auth, UserController.updateUser)
  .delete(auth, UserController.deleteUser)

router.route('/all').get(auth, UserController.getUsers)
router.route('/:userId').get(auth, UserController.getUserById)

module.exports = router
