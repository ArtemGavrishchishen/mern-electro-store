const { Router } = require('express')

const UserController = require('../controllers/users.controller')

const router = Router()
router
  .route('/')
  .get(UserController.getUsers)
  .post(UserController.createUser)
  .put(UserController.updateUser)
  .delete(UserController.deleteUser)

module.exports = router
