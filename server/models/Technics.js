const { Schema, model } = require('mongoose')

const types = Object.freeze({
  MOBILE: 'mobile',
  TABLETS: 'tablets',
  NOTEBOOKS: 'notebooks',
  TV: 'tv',
  OTHER: 'other',
})

const schema = new Schema({
  type: {
    type: String,
    required: true,
    enum: [types.MOBILE, types.TABLETS, types.NOTEBOOKS, types.TV, types.OTHER],
    default: types.OTHER,
  },
  brand: { type: String, required: true },
  model: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  photo: { type: Array, required: true },
  createdAt: { type: Date, default: new Date() },
})

module.exports = model('Technics', schema)
