import express from 'express'
import mongoose  from 'mongoose'

import routes from './routes'

const app = express()
const PORT = process.env.PORT || 8080
const MONGO_URI = 'mongodb+srv://MultiFruit_User:3s8rWQXtF46CTvLO@multifruit.euqsl.mongodb.net/MultiFruit?retryWrites=true&w=majority'

mongoose.connect(process.env.MONGO_URI || MONGO_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(routes)

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})
