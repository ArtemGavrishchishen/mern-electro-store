const Technics = require('../models/Technics')

exports.getTechnics = async ids => {
  try {
    const technics = await Technics.find({ _id: { $in: [...ids] } })
    if (technics.length === 0) return

    return technics
  } catch (error) {
    console.log(error)
  }
}
