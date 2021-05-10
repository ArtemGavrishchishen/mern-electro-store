const { validationResult } = require('express-validator')

const AuthService = require('../services/auth.service')
const UsersService = require('../services/users.service')

exports.register = async (req, res) => {
  try {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()[0],
        message: 'Incorrect registration data',
      })
    }

    const { name, surname, email, password } = req.body

    const isUserExist = await UsersService.checkUserByEmail(email)

    if (isUserExist) {
      return res.status(400).send({ message: 'This user is already exists' })
    }

    const result = await AuthService.register({
      name,
      surname,
      email,
      password,
      isAdmin: false,
    })

    if (result) {
      return res.status(200).send({ message: 'User has been created' })
    } else {
      return res.status(400).send({ message: 'Bad request.' })
    }
  } catch (error) {
    console.log(error)
  }
}

exports.login = async (req, res) => {
  try {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()[0],
        message: 'Incorrect login details',
      })
    }

    const { email, password } = req.body
    const user = await UsersService.getUserByEmail(email)
    if (!user) {
      return res.status(400).json({ message: 'User is not found' })
    }

    const token = await AuthService.getUserToken(password, user)
    if (!token) {
      return res.status(400).json({ message: 'Invalid password, try again' })
    }

    res.json({ token })
  } catch (e) {
    res.status(500).json({ message: e })
  }
}
