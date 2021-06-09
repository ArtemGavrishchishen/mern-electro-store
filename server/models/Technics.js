const { Schema, model } = require('mongoose')

const schema = new Schema({
  brand: { type: String, required: true },
  model: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  photo: { type: Array, required: true },
  createdAt: { type: Date, default: new Date() },
})

module.exports = model('Technics', schema)
