const { check } = require('express-validator')

// ========== authValidarots

exports.register = [
  check('email', 'Invalid email').normalizeEmail().isEmail(),
  check('password', 'Minimum password length 6 characters').isLength({
    min: 6,
  }),
  check('name', 'Enter your Name').notEmpty(),
  check('surname', 'Enter your Surname').notEmpty(),
]

exports.login = [
  check('email', 'Please enter a valid email').normalizeEmail().isEmail(),
  check('password', 'Enter password').exists(),
]

// ==========
