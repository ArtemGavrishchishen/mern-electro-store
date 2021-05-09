const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 8080
const MONGODB_URI = process.env.MONGODB_URI

// === Configuration
app.use(express.json({ extended: true }))
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

app.use('/api', require('./routes'))

// === Deploy
if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, '../client', 'build')))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'))
  })
}

// === ConnectDB && start server
async function start() {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    console.log('Database connection successful')
  } catch (e) {
    console.log('Database connection error', e.message)
    process.exit(1)
  }

  app.listen(PORT, () =>
    console.log('Server was started at http://localhost:' + PORT)
  )
}

start()
