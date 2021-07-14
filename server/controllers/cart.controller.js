const get = require('lodash/get')

const CartService = require('../services/cart.service')

exports.getTechnics = async (req, res) => {
  try {
    const ids = get(req, 'query.ids', [])

    const technics = await CartService.getTechnics(ids)
    if (technics) {
      return res.status(200).send({ data: technics })
    } else {
      return res.status(400).send({ message: 'Bad request.' })
    }
  } catch (error) {
    console.log(error)
  }
}
