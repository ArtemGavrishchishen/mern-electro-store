const { Router } = require('express')

const CartController = require('../controllers/cart.controller')

const router = Router()

router.route('/').get(CartController.getTechnics)

module.exports = router
