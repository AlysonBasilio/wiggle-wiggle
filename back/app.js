import express from 'express'
import cookieParser from 'cookie-parser'
import logger from 'morgan'

import routes from './routes/index.js'

var app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

routes.loadRoutes(app)

app.listen(3000,	()	=>	{
  console.log('Server is running')
})
