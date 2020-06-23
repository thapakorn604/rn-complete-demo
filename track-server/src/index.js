require('./models/User')

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const authRoutes = require('./routes/authRoutes')
const requireAuth = require('./middlewares/requireAuth')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(authRoutes)

const mongoUri =
  'mongodb+srv://admin:passwordpassword@cluster0-przl7.mongodb.net/<dbname>?retryWrites=true&w=majority'
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
})

mongoose.connection.on('connected', () => {
  console.log('Connected to mongo instance')
})

mongoose.connection.on('error', (error) => {
  console.log('Error when connecting to mongo instance', error)
})

app.get('/', requireAuth, (req, res) => {
  return res.send(`Your email: ${req.user.email}`)
})

app.listen(3000, () => {
  console.log('Listening of port: 3000')
})
