const UsersService = require('../services/users.service')

exports.getUsers = async (req, res) => {
  // try {
  //   const currentUser = await UsersService.getUserById(req.user.userId)
  //   if (!currentUser.isAdmin) {
  //     return res.status(401).json({ message: 'Access denied' })
  //   }
  //   const result = await UsersService.getUsers()
  //   if (result) {
  //     return res.status(200).send({ data: result })
  //   } else {
  //     return res.status(400).send({ message: 'Bad request.' })
  //   }
  // } catch (error) {
  //   console.log(error)
  // }
}

exports.getUserById = async (req, res) => {
  try {
    const id = req.params.userId
    const currentUser = await UsersService.getUserById(req.user.userId)

    if (currentUser) {
      if (id.trim() !== currentUser._id.toString().trim()) {
        return res.status(401).json({ message: 'Access denied' })
      } else {
        return res.status(200).send({ data: currentUser })
      }
    } else {
      return res.status(400).send({ message: 'Bad request.' })
    }
  } catch (error) {
    console.log(error)
  }
}

exports.updateUser = async (req, res) => {}

exports.deleteUser = async (req, res) => {}
