const { validationResult } = require('express-validator')
const get = require('lodash/get')

const TechnicsService = require('../services/technics.service')

exports.getTechnics = async (req, res) => {}

exports.createTechnic = async (req, res) => {
  try {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()[0],
        message: 'Incorrect data',
      })
    }

    TechnicsService.imgbbUpload(req.file, async (err, data) => {
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
  } catch (error) {
    res.status(500).json({ message: error })
  }
}

exports.updateTechnic = async (req, res) => {}

exports.deleteTechnic = async (req, res) => {}
