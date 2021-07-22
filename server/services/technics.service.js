const needle = require('needle')
const uniq = require('lodash/uniq')

const Technics = require('../models/Technics')

exports.getTechnics = async (category, query) => {
  try {
    const params = {}
    if (category) {
      params.type = category
    }
    if (query) {
      if (query.brand) {
        const brand = Array.isArray(query.brand)
          ? { $in: [...query.brand] }
          : { $in: [query.brand] }

        params.brand = brand
      }

      if (query.model) {
        const model = Array.isArray(query.model)
          ? { $in: [...query.model] }
          : { $in: [query.model] }

        params.model = model
      }
    }

    const technics = await Technics.find({ ...params }).sort({
      createdAt: -1,
    })

    const getUniqParams = key => {
      const uniqParams = uniq(technics.map(item => item[key]))

      return uniqParams.map(item => {
        const count = technics.reduce(
          (acc, el) => (el[key] === item ? acc + 1 : acc + 0),
          0
        )
        return { name: item, count }
      })
    }

    const initSidebarParams = {
      brand: getUniqParams('brand'),
      model: getUniqParams('model'),
    }

    return { technics, sidebar: initSidebarParams }
  } catch (error) {
    console.log(error)
  }
}

exports.getTechnicById = async (category, id) => {
  try {
    const technic = await Technics.find({ type: category, _id: id })

    return technic
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
