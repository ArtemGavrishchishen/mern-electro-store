const { validationResult } = require('express-validator')
const get = require('lodash/get')

const TechnicsService = require('../services/technics.service')

exports.getTechnics = async (req, res) => {
  try {
    const category = get(req, 'params.category', null)
    const id = get(req, 'params.id', null)
    console.log(get(req, 'params', null))
    const technics = await TechnicsService.getTechnics(category)
    if (technics) {
      return res.status(200).send({ data: technics })
    } else {
      return res.status(400).send({ message: 'Bad request.' })
    }
  } catch (error) {
    console.log(error)
  }
}

exports.createTechnic = async (req, res) => {
  try {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()[0],
        message: 'Incorrect data',
      })
    }
    const file = get(req, 'file', null)
    if (file) {
      TechnicsService.imgbbUpload(file, async (err, data) => {
        if (err) {
          return res.status(400).json({ message: err })
        }

        const dataImg = {
          imgbbId: get(data, 'data.id', null),
          title: get(data, 'data.title', null),
          url: get(data, 'data.url', null),
          displayUrl: get(data, 'data.display_url', null),
          thumbUrl: get(data, 'data.thumb.url', null),
          deleteUrl: get(data, 'data.delete_url', null),
        }

        const result = await TechnicsService.createTechnic(req.body, dataImg)

        res.status(200).json(result)
      })
    } else {
      res.status(400).send({ message: 'Please add a photo.' })
    }
  } catch (error) {
    res.status(500).json({ message: error })
  }
}

exports.updateTechnic = async (req, res) => {}

exports.deleteTechnic = async (req, res) => {}
