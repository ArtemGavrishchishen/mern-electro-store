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

exports.getUserByEmail = async email => {
  try {
    const user = await User.findOne({ email })
    const { __v, ...userObject } = { ...user.toObject() }

    return userObject
  } catch (error) {
    console.log(error)
  }
}

exports.getUserById = async id => {
  try {
    const user = await User.findOne({ _id: id })
    const { __v, password, ...userObject } = { ...user.toObject() }
    return userObject
  } catch (error) {
    console.log(error)
  }
}

exports.checkUserByEmail = async email => {
  try {
    const user = await User.findOne({ email })

    if (user) {
      return true
    } else {
      return false
    }
  } catch (error) {
    console.log(error)
    return false
  }
}

exports.updateUser = async data => {}

exports.deleteUser = async data => {}
