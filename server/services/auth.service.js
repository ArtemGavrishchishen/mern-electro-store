const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const User = require('../models/User')

exports.register = async data => {
  try {
    const { name, surname, email, password, isAdmin } = data

    const hashedPassword = await bcrypt.hash(password, 12)
    const user = new User({
      name,
      surname,
      email,
      password: hashedPassword,
      isAdmin,
    })
    await user.save()

    return true
  } catch (error) {
    console.log(error)
  }
}

exports.getUserToken = async (userPassword, user) => {
  try {
    const isMatch = await bcrypt.compare(userPassword, user.password)
    if (!isMatch) {
      return false
    }
    const token = jwt.sign({ userId: user._id }, process.env.jwtSecret, {
      expiresIn: '24h',
    })

    return token
  } catch (error) {
    console.log(error)
  }
}
