const needle = require('needle')
const uniq = require('lodash/uniq')
const get = require('lodash/get')

const Technics = require('../models/Technics')

exports.getTechnics = async (category, query) => {
  try {
    const params = {}
    if (category) {
      params.type = category
    }

    const brand = get(query, 'brand', null)
    const model = get(query, 'model', null)

    const checkAndConvertToArray = items => {
      return Array.isArray(items) ? [...items] : [items]
    }

    if (brand) {
      params.brand = { $in: [...checkAndConvertToArray(brand)] }
    }

    if (model) {
      params.model = { $in: [...checkAndConvertToArray(model)] }
    }

    const aggregateTechnicsBrand = await Technics.aggregate([
      { $match: { type: category } },
      { $group: { _id: '$brand', count: { $sum: 1 } } },
      { $sort: { _id: 1 } },
    ])

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

    const initSidebarParams = (brand, model) => {
      const init = {}

      if (model) {
        init.brand = getUniqParams('brand')
      } else {
        init.brand = aggregateTechnicsBrand.map(brand => ({
          name: brand._id,
          count: brand.count,
        }))
      }

      if (brand && checkAndConvertToArray(brand).length === 1) {
        init.model = getUniqParams('model')
      } else {
        init.model = []
      }

      return { ...init }
    }

    return {
      technics,
      sidebar: initSidebarParams(brand, model),
    }
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
