const needle = require('needle')

const Technics = require('../models/Technics')

exports.getTechnics = async (category, id) => {
  try {
    const params = {}
    if (category) {
      params.type = category
    }

    if (id) {
      params._id = id
    }

    const technics = await Technics.find({ ...params })

    return technics
  } catch (error) {
    console.log(error)
  }
}

exports.createTechnic = async (data, img) => {
  try {
    const { brand, model, description, price } = data

    const technics = new Technics({
      brand,
      model,
      description,
      price,
      photo: [img],
    })
    await technics.save()
    return technics
  } catch (error) {
    console.log(error)
  }
}

exports.updateTechnic = async data => {}

exports.deleteTechnic = async data => {}

exports.imgbbUpload = (data, callback) => {
  const url = 'https://api.imgbb.com/1/upload'
  const apiKey = process.env.IMGBB

  try {
    needle.post(
      `${url}?key=${apiKey}&name=${data.originalname}`,
      { image: data.buffer.toString('base64') },
      { multipart: true },
      async (err, res) => {
        await callback(err, res.body)
      }
    )
  } catch (error) {
    console.log(error)
  }
}
