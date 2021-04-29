import express from 'express'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import cors from 'cors'

import employeesRoutes from './routes/employees'

import './api/config'

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.use(employeesRoutes)

export default app
