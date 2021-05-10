const { Router } = require('express')

const AuthController = require('../controllers/auth.controller')
const Validator = require('../enhancers/validator')

const router = Router()

router.route('/register').post(Validator.register, AuthController.register)

router.route('/login').post(Validator.login, AuthController.login)

module.exports = router
