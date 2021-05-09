const UsersService = require('../services/users.service')

exports.getUsers = async (req, res) => {
  try {
    const result = await UsersService.getUsers()
    if (result) {
      return res.status(200).send({ data: result })
    } else {
      return res.status(400).send({ message: 'Bad request.' })
    }
  } catch (error) {
    console.log(error)
  }
}

exports.createUser = async (req, res) => {
  if (req.body.user) {
    try {
      const isUserExist = await UsersService.checkUser(req.body.user)

      if (isUserExist) {
        return res.status(400).send({ message: 'This user is already exists' })
      }

      const result = await UsersService.createUser(req.body.user)

      if (result) {
        return res.status(200).send({ message: 'User has been created' })
      } else {
        return res.status(400).send({ message: 'Bad request.' })
      }
    } catch (error) {
      console.log(error)
    }
  } else return res.status(400).send({ message: 'Bad request.' })
}

exports.updateUser = async (req, res) => {}

exports.deleteUser = async (req, res) => {}
