const bcrypt = require('bcryptjs')

const User = require('../models/User')

exports.getUsers = async () => {
  try {
    const users = await User.find()

    const usersWithoutPassword = users.map(user => {
      const userObject = { ...user.toObject() }
      const { password, __v, ...withoutPassword } = userObject
      return withoutPassword
    })

    return usersWithoutPassword
  } catch (error) {
    console.log(error)
  }
}

exports.checkUser = async data => {
  try {
    const { email } = data
    const user = await User.findOne({ email })

    if (user) {
      return true
    } else {
      return false
    }
  } catch (error) {
    console.log(error)
  }
}

exports.createUser = async data => {
  try {
    const { name, surname, email, password } = data

    const hashedPassword = await bcrypt.hash(password, 12)
    const user = new User({ name, surname, email, password: hashedPassword })
    await user.save()

    return true
  } catch (error) {
    console.log(error)
  }
}

exports.updateUser = async data => {}

exports.deleteUser = async data => {}
