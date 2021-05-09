const { Schema, model } = require('mongoose')

const schema = new Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  isAdmin: { type: Boolean, required: true, default: false },
  password: { type: String, required: true },
  createdAt: { type: Date, default: new Date() },
})

module.exports = model('User', schema)
