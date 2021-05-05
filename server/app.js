const express = require('express')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 8080

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

app.use('/api', require('./routes/main.routes'))

// === Deploy
if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, '../client', 'build')))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'))
  })
}

// === Start server
function start() {
  app.listen(PORT, () =>
    console.log('Server was started at http://localhost:' + PORT)
  )
}

start()
